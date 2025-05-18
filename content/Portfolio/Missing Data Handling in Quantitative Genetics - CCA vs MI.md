---
title: 
description:
---

## Project Overview

This project investigates how different missing data handling methods affect the analysis of evolutionary potential in biological populations. Specifically, I compared Complete Case Analysis (CCA) and Multiple Imputation (MI) to determine which better preserves the variance-covariance structure critical for evolutionary analyses.

## Motivation

Missing data is a universal challenge across scientific disciplines. In evolutionary biology and paleontological studies, this problem is particularly acute - especially when working with fossil specimens where data completeness can't be improved through additional sampling.

Traditional approaches like Complete Case Analysis (CCA) discard incomplete samples, potentially introducing bias and reducing statistical power. More sophisticated methods like Multiple Imputation (MI) attempt to preserve information by generating plausible values for missing data points based on relationships within the observed data.

## Technical Approach

### Methodology

I developed a comprehensive simulation framework to evaluate these methods under controlled conditions:

1. **Data Simulation**: Generated datasets with known variance-covariance structure using parameters from real threespine stickleback fish populations and artificial populations spanning different regions of variance-eccentricity space.
    
2. **Introducing Missingness**: Created 12 missingness scenarios per dataset by systematically varying:
    
    - Missingness mechanism (MCAR, MAR, MNAR)
    - Missingness intensity (30%, 50%, 70%, 90%)
3. **Data Handling**: Applied both CCA and MI to each scenario.
    
4. **Comparison**: Used Random Skewers analysis to quantify how well each method preserved the original covariance structure.
    
5. **Statistical Analysis**: Employed ANOVA to identify significant factors influencing performance.
    

### Technical Skills Demonstrated

- **Advanced R Programming**: Implemented complex simulations, statistical analyses, and data visualization
- **Statistical Modeling**: Applied multivariate statistics, ANOVA, and matrix analysis
- **Data Simulation**: Created realistic datasets with controlled properties
- **Missing Data Methods**: Implemented and evaluated sophisticated techniques
- **Research Design**: Developed a multifactorial experimental framework
- **Data Visualization**: Created informative and publication-quality graphics

## Key Findings

The analysis revealed several important insights:

- **Missingness percentage** was the dominant factor affecting performance (mean partial η² = 0.452)
- The **interaction between missingness percentage and cleaning method** was the second most influential factor (mean partial η² = 0.419)
- **MI consistently outperformed CCA** as missingness increased, achieving both higher median correlations and lower variance
- Performance patterns varied across different population types, suggesting that variance-covariance properties influence method performance

## Implementation Highlights

### Simulation Framework

I designed a multi-stage simulation process to systematically evaluate method performance:

```r
spa <- function(data, iters, pname=NULL, rerun=FALSE, fresh=FALSE, size.cor=FALSE, plot.dens=FALSE){
  # Storing pop name
  if(is.null(pname)){
    pname <- unique(data$pop)
  }
  
  p.sim <- paste0(p.data.sim, pname, "_SIM.rds")
  p.out <- paste0(p.results, pname, "_OUT.rds")
  
  # Generate or load simulation data
  if((file.exists(p.sim) == FALSE) || fresh == TRUE){
    # perform data prep
    iter_data_list <- simulateData(data, iters)
    
    master_list <- list()
    # Iterate through data and create lists containing missing datasets
    for(i in seq(length(iter_data_list))){
      # Store the current dataset
      complete <- iter_data_list[[i]]
      
      # Introduce Missingness with various levels and mechanisms
      MCAR.miss <- setMiss(complete, mlevels, "MCAR")
      MAR.miss <- setMiss(complete, mlevels, "MAR")
      MNAR.miss <- setMiss(complete, mlevels, "MNAR")
      
      MCAR.imp <- imp(MCAR.miss, mlevels, "MCAR")
      MAR.imp <- imp(MAR.miss, mlevels, "MAR")
      MNAR.imp <- imp(MNAR.miss, mlevels, "MNAR")
      
      # Add complete and missing datasets to main list
      master_list[[i]] <- list(complete, MCAR.imp, MAR.imp, MNAR.imp)
    }
    
    # Save the list to an RDS file
    saveRDS(master_list, file = p.sim)
  } else {
    master_list <- readRDS(p.sim)
  }
  
  # [Additional code for analysis and visualization]
}
```

### Matrix Comparison Methods

One of the core analytical techniques I implemented was Random Skewers analysis to compare variance-covariance matrices:

```r
rs_pool <- function(out) {
  # Calculate the pooled point estimate
  mean_correlation <- mean(sapply(out, function(x) x["correlation"]))
  
  # Calculate the within-imputation variance
  W_correlation <- mean(sapply(out, function(x) x["correlation_sd"]^2))
  
  # Calculate the between-imputation variance
  B_correlation <- var(sapply(out, function(x) x["correlation"]))
  
  # Calculate the total variance
  m <- length(out)  # number of imputations
  T_correlation <- W_correlation + (1 + 1/m)*B_correlation
  
  # Calculate degrees of freedom
  df_correlation <- (m - 1) * (1 + W_correlation / ((1 + 1/m) * B_correlation))^2
  
  # Store in dataframe and return
  pooled_df <- data.frame(
    C1 = mean_correlation,        
    C2 = T_correlation, 
    C3 = df_correlation      
  )
  colnames(pooled_df) <- c("Pooled Estimate", "Total Variance", "Degrees of Freedom")
  rownames(pooled_df) <- "Random Skewers"
  
  return(pooled_df)
}
```

### Visualization of Results

I created compelling visualizations to communicate the complex patterns in my results:

```r
plotBoxplots <- function(flattened_df, pname) {
  # Extract unique metrics
  metrics <- unique(flattened_df$metric)[-c(2, 6, 7, 8)]

  # Define colors for mechanisms
  mech_colors <- c(MCAR = "#D55E00", MAR = "#009E73", MNAR = "#0072B2")

  for (m in metrics) {
    # Filter data for the current metric
    metric_data <- flattened_df %>% filter(metric == m)
    ylabel <- m
    if(m == "Random Skewers"){ylabel <- "Random Skewers Correlation"}
    dodge_width <- .75
    
    # Create boxplot with patterns to distinguish methods
    p <- ggplot(metric_data, aes(x = Percentage, y = MetricValue, 
                                color = Mechanism, fill = Mechanism, pattern = Method)) +
      geom_boxplot_pattern(
        position = position_dodge(dodge_width),
        pattern_density = 0.0075,
        pattern_spacing = 0.0075,
        outlier.shape = NA,
        pattern_key_scale_factor = 0.6,
        pattern_colour = "black",
        color = "black"
      ) +
      scale_pattern_manual(values = c("CCA" = "none", "MI" = "stripe")) +
      scale_fill_manual(values = mech_colors) +
      scale_color_manual(values = mech_colors) +
      stat_boxplot(geom = 'errorbar', width = 0.2, 
                   position = position_dodge(dodge_width), color = "black") +
      labs(title = paste0(m, " Results for ", pname),
           x = "% Missingness", y = ylabel) +
      theme_minimal(base_size = 14) +
      theme(legend.position = "right",
            plot.title = element_text(face = "bold", hjust = 0.5),
            axis.text.x = element_text(face = "bold", color = "black", size = 12),
            axis.text.y = element_text(size = 12),
            legend.title = element_blank(),
            panel.grid.major = element_line(color = "gray90"),
            panel.grid.minor = element_line(color = "gray95")) +
      guides(
        fill = guide_legend(override.aes = list(pattern = "none")),
        pattern = guide_legend(override.aes = list(fill = NA))
      )

    # Save file
    file_name <- paste0(p.bp, m, "/", gsub("Change in ", "d", m), "_", pname, ".png")
    ggsave(file_name, plot = p, width = 10, height = 8, dpi = 300, bg = "white")
  }
}
```

## Practical Impact

This research provides evidence-based guidance for researchers working with incomplete datasets in evolutionary biology and beyond:

1. **MI offers substantial advantages** over CCA, especially with higher missingness percentages
2. **Even under MNAR conditions**, MI typically outperforms CCA
3. Different population structures respond differently to missing data methods, suggesting potential for **tailored approaches based on data properties**

The findings contribute to more accurate estimates of evolutionary potential in populations with missing data, particularly valuable for paleontological studies and other contexts where additional sampling is impossible.

## Conclusion

This project demonstrates not only technical proficiency with advanced statistical methods and R programming, but also the ability to design and implement a comprehensive research framework that addresses a significant methodological challenge. The results provide practical guidance to researchers while advancing our understanding of how different missing data methods perform in biological contexts.