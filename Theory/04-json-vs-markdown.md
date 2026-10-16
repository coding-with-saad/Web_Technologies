# JSON vs Markdown

## Overview

JSON and Markdown have different purposes:

-   **JSON** structures data for applications and data exchange.
-   **Markdown** formats readable documentation and text.

## JSON

JSON stands for **JavaScript Object Notation**. It is a lightweight
data-interchange format.

### Example

``` json
{
  "name": "Saad",
  "semester": 5,
  "skills": ["Python", "HTML", "JavaScript"],
  "active": true
}
```

### JSON Concepts

-   `{}` represents an object.
-   `"name"` is a key.
-   `"Saad"` is a string value.
-   `[]` represents an array.
-   `5` is a number.
-   `true` is a Boolean value.
-   `null` represents an empty/no-value value.

Standard JSON uses double quotes for keys and strings. It does not
support comments or trailing commas.

## Markdown

Markdown is a lightweight markup syntax used for readable text and
documentation.

### Example

``` markdown
# API Learning Notes

## Introduction

An API enables communication between software systems.

### Examples

- REST API
- GraphQL API

**Important:** APIs have different use cases.

`GET /students/10`

[Learn more](https://developer.mozilla.org/)
```

GitHub renders this as headings, lists, bold text, inline code, and a
link.

## Comparison

  -----------------------------------------------------------------------
  JSON                                Markdown
  ----------------------------------- -----------------------------------
  Data-interchange format             Text-formatting syntax

  Common in API requests and          Common in README files and guides
  responses                           

  Uses objects, arrays, and values    Uses headings, lists, links, and
                                      emphasis

  Usually consumed by software        Usually written for people and
                                      rendered by a viewer
  -----------------------------------------------------------------------

## How They Work Together

An API may return JSON data, while the documentation explaining that API
is written in Markdown.

## Quick Revision

1.  What does JSON stand for?
2.  What are `{}` and `[]` used for in JSON?
3.  What is Markdown commonly used for on GitHub?
4.  Can JSON contain comments?
