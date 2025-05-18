---
title: 
description:
---

## Project Overview

LongReads is a specialized bioinformatics pipeline I developed to analyze and compare the variation of 16S rRNA regions both within (intragenomic) and between (intergenomic) strains of bacterial species. The tool leverages NCBI databases and focuses specifically on genomes that were sequenced using long-read technologies (PacBio and Oxford Nanopore), which provide higher accuracy for repetitive genomic regions like 16S.

### Problem & Solution

**The Challenge:** The 16S rRNA gene is a crucial genetic marker for bacterial taxonomy and phylogeny, but organisms can have multiple copies of this gene that vary within a single genome. Traditional sequencing approaches often struggle to accurately capture this variation.

**The Solution:** By creating a pipeline that:

1. Selectively targets genomes sequenced with long-read technologies
2. Identifies and extracts all 16S copies from each genome
3. Calculates edit distances to quantify variation
4. Generates statistical analyses and visualizations to interpret the findings

This tool provides researchers with a better understanding of 16S variation patterns, which has implications for bacterial identification methods and evolutionary studies.

## Technical Implementation

The pipeline consists of three key components:

### 1. Data Acquisition & Processing

- Automated retrieval of bacterial genome metadata from NCBI databases
- Filtering for genomes sequenced using long-read technologies only
- Downloading complete genomic sequences for analysis

### 2. Sequence Analysis

- Creation of a BLAST database using a reference 16S sequence
- BLAST search to identify all 16S copies in each genome
- Custom assignment of unique identifiers to differentiate between copies
- Calculation of edit distances between all 16S sequences

### 3. Statistical Analysis & Visualization

- Statistical comparison of intragenomic vs. intergenomic variation
- Generation of visualizations including boxplots, histograms, and distribution charts
- Quantification of shared vs. unique 16S copies within and between genomes

## Technologies Used

**Languages:**

- Python (primary pipeline)
- R (statistical analysis and visualization)
- Bash (automation and tool integration)

**Key Libraries & Tools:**

- Biopython for sequence manipulation
- Pandas/NumPy for data handling
- BLAST+ for sequence alignment
- NCBI Entrez Direct and Datasets for database access
- ggplot2 for publication-quality visualizations
- Docker for containerization and reproducibility

## Leadership & Collaboration

As the graduate student team lead, I was responsible for:

- Designing the overall architecture of the pipeline
- Breaking down the project into manageable components
- Mentoring two undergraduate team members on bioinformatics practices
- Coordinating regular code reviews and integration sessions
- Establishing documentation standards and ensuring code quality

The collaborative environment required me to balance technical guidance with allowing team members to develop their skills independently. I learned to effectively delegate tasks based on team members' strengths while providing support in challenging areas.

## Outcomes & Impact

The LongReads pipeline successfully:

- Demonstrated statistically significant differences between intragenomic and intergenomic 16S variation
- Provided a reproducible workflow for analyzing other bacterial species
- Created a foundation for exploring how 16S variation impacts bacterial identification methods
- Generated quantitative data on the prevalence of shared vs. unique 16S copies

The tool is now available as an open-source resource that can be deployed either through Docker or as a standalone application, making it accessible to researchers with varying levels of computational expertise.

## Skills Developed

- **Technical Skills:** Advanced Python programming, R statistical analysis, sequence analysis algorithms, containerization with Docker, version control with Git
- **Bioinformatics Knowledge:** Next-generation sequencing analysis, BLAST database construction and querying, phylogenetic methods
- **Leadership:** Team coordination, task delegation, technical mentoring, project planning
- **Communication:** Documentation writing, explaining complex concepts to varying technical audiences, collaborative problem-solving

## Reflection

This project represented my first experience leading a mixed-level team in developing a complete bioinformatics pipeline. The most valuable lesson was learning how to balance providing direction while fostering team members' growth and independence. The technical challenges we encountered—particularly in optimizing the edit distance calculations for large datasets—pushed me to develop more efficient algorithmic approaches.

The LongReads project demonstrated to me that effective scientific software development requires not just technical proficiency but also clear communication, thoughtful project management, and an understanding of the biological questions being addressed.