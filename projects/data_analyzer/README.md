<!--
  Data Analyzer README

  This document describes how to use the Data Analyzer script. The
  script reads a CSV file and computes summary statistics for
  numeric columns. It leverages the pandas library to handle data
  processing efficiently. Use this tool to get quick insights into
  your datasets.
-->

# Data Analyzer

The **Data Analyzer** is a command‑line tool written in Python. It
reads a CSV file and outputs basic statistics for each numeric
column, such as count, mean, median, minimum and maximum values. This
project demonstrates data wrangling and analysis skills using
`pandas`.

## Features

- Reads CSV files with headers
- Automatically detects numeric columns
- Computes count, mean, median, minimum and maximum for each numeric
  field
- Handles missing values gracefully

## Setup

1. Ensure you have Python 3.8 or later installed.
2. Install the required dependency:

   ```bash
   pip install pandas
   ```

## Usage

Run the script and pass the path to your CSV file as an argument:

```bash
python analyze.py path/to/your/data.csv
```

You can optionally specify the number of rows to display from the top
of the dataset for a quick preview:

```bash
python analyze.py path/to/your/data.csv --head 5
```

## Example

If you have a file called `sample.csv` with columns like `Age` and
`Salary`, running the analyzer will print summary statistics for
those columns. Example output:

```
Column: Age
 count  : 100
 mean   : 35.2
 median : 34.0
 min    : 21
 max    : 60

Column: Salary
 count  : 100
 mean   : 45000.0
 median : 42000.0
 min    : 25000
 max    : 90000
```

## License

This project is licensed under the MIT License. See the root `LICENSE`
file for details.
