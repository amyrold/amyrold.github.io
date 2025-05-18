---
title: 
description:
---

## Project Overview

This research project investigated the evolutionary dynamics of threespine stickleback fish (_Gasterosteus aculeatus_) through the lens of Fisher's Geometric Model of Adaptation. Using a rich fossil record spanning thousands of years, I examined how these fish adapted to environmental changes over time, specifically testing core predictions of Fisher's evolutionary theory.

The project analyzed phenotypic changes in three key morphological traits: pelvic score, dorsal spine number, and touching pterygiophore number. By implementing rigorous statistical methods and evolutionary modeling, I was able to test whether adaptive evolution follows the patterns predicted by one of the most influential models in evolutionary biology.

### Scientific Context & Questions

Fisher's Geometric Model (1930) makes two central predictions about adaptation:

1. **Distribution of effect sizes**: When a population adapts to a new environment, the phenotypic effect sizes of evolutionary changes should follow an approximately exponential distribution, with few large-effect changes and many small-effect changes.
    
2. **Temporal pattern of adaptation**: Larger phenotypic changes should occur early in adaptation, with effect sizes decreasing in a geometric sequence over time as the population approaches the optimal phenotype.
    

These predictions have profound implications for understanding evolutionary processes but are rarely tested with empirical data from natural populations. My research addressed this gap by using the exceptional fossil record of stickleback fish to directly test these predictions.

## Technical Implementation

This project employed advanced statistical methods and computational approaches to analyze evolutionary patterns:

### Data Analysis Pipeline

1. **Data Preparation & Cleaning**
    
    - Processed morphological measurements from fossil specimens
    - Implemented quality control procedures to identify and handle outliers
    - Created unified data structures for multi-trait analyses
2. **Evolutionary Trajectory Analysis**
    
    - Calculated phenotypic distances to the optimal morphology for each trait
    - Measured step sizes between successive time periods
    - Standardized measurements to allow comparison across traits
    - Developed multivariate approaches to analyze evolution in trait-space
3. **Statistical Modeling & Testing**
    
    - Implemented bootstrap resampling (100 iterations) to quantify uncertainty
    - Performed rigorous distributional testing against theoretical predictions
    - Applied statistical tests including Q-Q plots, Kolmogorov-Smirnov tests, and R² analyses
    - Developed specialized functions to standardize mutation effect sizes
4. **Visualization Development**
    
    - Created sophisticated multi-panel visualizations of evolutionary trajectories
    - Designed specialized plots to compare empirical distributions against theoretical predictions
    - Generated figures suitable for scientific publication

### Key Technical Approaches

- **Multivariate Analysis**: Analyzed the joint evolution of multiple traits in multivariate space
- **Bootstrap Resampling**: Quantified uncertainty in evolutionary step sizes
- **Hypothesis Testing**: Formally tested whether evolutionary changes follow exponential distributions
- **Maximum Likelihood Estimation**: Fitted statistical distributions to empirical data
- **Euclidean Distance Metrics**: Measured phenotypic distances in multivariate trait space

## Technologies Used

- **R Statistical Environment**: Primary analytical platform
- **Statistical Packages**:
    - gamlss (Generalized Additive Models for Location, Scale and Shape)
    - KScorrect (Lilliefors-corrected Kolmogorov-Smirnov tests)
    - EnvStats (Environmental statistics)
    - tidyverse (Data manipulation and visualization)
- **Custom Functions**: Developed specialized functions for evolutionary analysis
- **Version Control**: Managed code development using Git

## Results & Scientific Impact

The research yielded several important findings:

1. **Support for Fisher's Exponential Distribution**: The distribution of standardized phenotypic changes (mutation effect sizes) closely followed the predicted exponential distribution, with high R² values (0.87-0.99) across all traits.
    
2. **Temporal Pattern Validation**: Larger phenotypic steps occurred early in adaptation, with effect sizes diminishing over time as predicted by theory.
    
3. **Multivariate vs. Univariate Evolution**: The multivariate approach revealed patterns that were not always apparent when traits were analyzed individually, highlighting the importance of considering multiple traits simultaneously.
    
4. **Quantification of Evolutionary Parameters**: The project provided empirical estimates of key evolutionary parameters, including the rate parameters of exponential distributions governing adaptation.
    

These findings contribute to our fundamental understanding of evolutionary processes and provide some of the first direct tests of Fisher's Geometric Model using data from natural populations.

## Skills Demonstrated

This project showcased my expertise in:

- **Advanced Statistical Analysis**: Implementation of complex statistical models and hypothesis testing
- **Evolutionary Biology**: Deep understanding of theoretical models and their empirical testing
- **Scientific Programming**: Development of custom analytical workflows in R
- **Data Visualization**: Creation of publication-quality scientific visualizations
- **Model Fitting**: Application of maximum likelihood approaches to fit theoretical distributions
- **Bootstrap Methods**: Implementation of resampling techniques to quantify uncertainty
- **Research Design**: Construction of appropriate statistical tests for evolutionary hypotheses
- **Scientific Collaboration**: Worked closely with Dr. Yoel Stuart to design analyses and interpret results

## Methodological Innovations

Several methodological innovations were developed during this project:

1. **Integrated Multivariate Framework**: Combined multiple morphological traits into a unified analysis of adaptation in multivariate space.
    
2. **Standardized Effect Size Calculation**: Implemented a robust approach to standardize phenotypic changes, enabling direct comparison with theoretical predictions.
    
3. **Bootstrap Confidence Assessment**: Developed a bootstrap approach to identify statistically significant evolutionary steps versus sampling noise.
    
4. **Distribution Testing Pipeline**: Created a comprehensive pipeline for testing empirical distributions against theoretical predictions.
    

This project represents a significant contribution to the field of evolutionary biology by providing empirical support for key theoretical predictions about how organisms adapt to their environments over time.