---
title: "Natural Language Processing for Biomedical Literature"
date: 2023-08-10
featured: false
github_repo: amyrold/biomedical-nlp
tags: 
  - Python
  - Machine Learning
  - NLP
  - PyTorch
  - Bioinformatics
---

# Natural Language Processing for Biomedical Literature

This project applies state-of-the-art NLP techniques to biomedical literature to extract relationships between genes, proteins, and diseases, helping researchers identify new potential therapeutic targets.

## Personal Experience

As someone passionate about both computational biology and machine learning, this project allowed me to combine these interests in a meaningful way. The biomedical domain presents unique challenges for NLP due to its specialized vocabulary and complex relationship structures.

One of the biggest challenges was adapting transformer-based models to handle the specialized biomedical vocabulary without requiring excessive computational resources. I implemented an efficient tokenization strategy that preserved domain-specific terms while reducing the overall vocabulary size.

This project gave me hands-on experience with PyTorch and huggingface's transformers library, as well as deepening my understanding of how NLP can accelerate scientific discovery.

## Technical Overview

The project includes:

- Custom dataset creation from PubMed abstracts and full-text articles
- Domain-specific tokenization and vocabulary building
- Fine-tuning of BERT and BioBERT models for relation extraction
- Named entity recognition for genes, proteins, and diseases
- Knowledge graph construction from extracted relationships
- Web interface for researchers to query the knowledge base

The system achieves over 85% precision on relationship extraction tasks, outperforming previous methods on the BioCreative benchmark.
