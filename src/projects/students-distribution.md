---
title: "Map-Based Students Distribution"
featured_image: /students-distribution/featured-image.png
summary: "Era javascript di dunia programming naik begitu cepat, hal ini ditandai dengan munculnya berbagai produk yang menjadikan javascript sebagai…"
date: 2025-01-02
tags: projects
slug: map-based-student-distribution
layout: layouts/project.njk
---

A map-based visualization for student's home address distribution grouped by 'kecamatan' (Indonesian administration name for 'District'). There are three classification for distribution with different color. It will be good option to plan targeted promotion to gain new students.

## Features

- Authentication (admin only)
- Add new locations (Provinsi/Province, Kota/City, Kecamatan/District)
- Add new student data
- Map-based visualization
- Authorization for seeing protected data on map
- Yearly distribution chart
- Top 10 location chart by year
- Yearly distribution chart for selected location
- TopoJSON uploader (wip)
- Customizable map classification and indicator (wip)
- Map with rich charts (wip)

## Tech Stacks

- Symfony 5.2
- Bootstrap
- LeafletJS with Mapbox
- ChartJS

## Installation

```bash
git clone https://github.com/azharisikumbang/webgis
cd webgis

composer install

# Don't forget to copy and setting the .env file for databases, etc.
php bin/console doctrine:database:create
php bin/console doctrine:schema:update --force
php bin/console server:start
```


