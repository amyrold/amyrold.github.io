---
title: 
description:
---

## Project Overview

This project involved the development of a comprehensive bioinformatics pipeline for the detection, assembly, and characterization of Human Cytomegalovirus (HCMV) genomes from next-generation sequencing data. The pipeline automatically processes raw sequencing reads, performs targeted mapping to identify viral sequences, assembles complete viral genomes, and characterizes them through comparative genomics.

### Problem & Solution

**The Challenge:** Viral genomes are often present at low abundance in clinical and research samples, making their detection and assembly challenging. Traditional approaches can miss viral sequences or fail to assemble complete viral genomes due to low coverage or high background.

**The Solution:** I developed an automated pipeline that:

1. Efficiently extracts viral sequences from large NGS datasets
2. Maps reads specifically to the target viral genome
3. Employs optimized assembly parameters for viral genome reconstruction
4. Performs comparative analysis to identify the specific viral strain
5. Generates comprehensive reports on assembly statistics and taxonomic classification

This approach significantly improved the detection and characterization of HCMV in complex samples compared to standard metagenomic assembly methods.

## Technical Implementation

The pipeline consists of five main components, each addressing a specific challenge in viral genome analysis:

### 1. Data Management & Preprocessing

- Implemented a modular directory structure for organized data flow
- Created flexible input options allowing both full datasets and test datasets
- Developed automated data retrieval from NCBI's Sequence Read Archive (SRA)
- Built safeguards to prevent redundant downloads and processing

### 2. Reference-Based Read Mapping

- Automated retrieval of reference genomes from NCBI using Entrez API
- Built Bowtie2 indices for efficient read mapping
- Implemented targeted extraction of viral reads from large datasets
- Tracked and reported mapping statistics to evaluate viral abundance

### 3. De Novo Genome Assembly

- Configured SPAdes assembler with parameters optimized for viral genomes
- Employed multiple k-mer sizes (77, 99, 127) to improve assembly contiguity
- Processed paired-end data with appropriate read grouping
- Generated detailed assembly statistics for quality assessment

### 4. Assembly Filtering & Analysis

- Implemented contig filtering based on size thresholds
- Identified and extracted the longest assembled contigs
- Quantified assembly completeness through sequence metrics
- Generated filtered sets of high-quality contigs for downstream analysis

### 5. Taxonomic Classification & Strain Identification

- Created custom BLAST databases of Betaherpesvirinae sequences
- Performed sensitive sequence similarity searches
- Parsed and formatted BLAST results for easy interpretation
- Identified specific viral strains and related genome sequences

## Technologies Used

**Languages & Tools:**

- Python (primary scripting language)
- Bash (command integration and text processing)
- Biopython (sequence manipulation and NCBI interaction)

**Bioinformatics Software:**

- Bowtie2 (read mapping)
- SPAdes (genome assembly)
- BLAST+ (sequence similarity search)
- NCBI Entrez Direct utilities (data retrieval)

**Programming Concepts:**

- Subprocess management for tool integration
- File path handling for cross-platform compatibility
- Error handling and validation
- Dynamic command generation

## Results & Impact

The pipeline successfully:

- Processed over 9 million sequencing reads across four samples
- Identified and extracted between 25-34% of reads mapping to HCMV
- Generated a high-quality assembly with 48 contigs over 1000bp in length
- Successfully identified the assembled sequence as Human betaherpesvirus 5
- Matched multiple reference strains with 100% sequence identity
- Provided detailed metrics on read filtering and assembly quality

The analysis demonstrated the presence of specific HCMV strains including TB40/E, which is particularly relevant in clinical and research contexts due to its distinct biological properties.

## Technical Challenges Overcome

Several complex challenges were addressed during this project:

1. **Efficient Data Processing**: Implemented streaming approaches to handle large FASTQ files without excessive memory usage.
    
2. **Cross-Platform Compatibility**: Ensured the pipeline would work across different operating systems by using platform-independent path handling and commands.
    
3. **Tool Integration**: Seamlessly connected multiple bioinformatics tools with different input/output formats and parameter requirements.
    
4. **Resource Optimization**: Configured tools to balance computational requirements with performance, particularly for the assembly process.
    
5. **Results Interpretation**: Developed parsing strategies to extract meaningful biological information from complex output formats.
    

## Skills Demonstrated

This project showcases several key bioinformatics and programming skills:

- **Next-Generation Sequencing Analysis**: Processing and quality control of high-throughput sequencing data
- **Genomic Assembly**: Configuration and optimization of assembly algorithms for specific use cases
- **Sequence Analysis**: Comparative genomics and taxonomic classification
- **API Integration**: Interaction with biological databases through programmatic interfaces
- **Pipeline Development**: Creation of reproducible, modular workflows
- **Shell Scripting**: Integration of command-line tools into cohesive pipelines
- **Data Management**: Organization and tracking of complex biological datasets

## Reflection

This project enhanced my expertise in viral genomics and bioinformatics pipeline development. By creating a streamlined workflow for HCMV analysis, I gained valuable experience in optimizing each step of the genomic analysis process.

The modular nature of the pipeline makes it adaptable to other viral genomes with minimal modifications, demonstrating the power of well-designed bioinformatics workflows. The experience reinforced the importance of comprehensive reporting and validation in bioinformatics analyses, especially when dealing with clinically relevant pathogens.

The techniques developed in this project are directly applicable to a wide range of genomic analyses beyond viral sequences, including targeted assembly of specific genomic regions, comparative genomics, and strain-level identification of microorganisms.