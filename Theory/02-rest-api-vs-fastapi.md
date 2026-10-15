# REST API vs FastAPI

## The Main Difference

**REST API and FastAPI are not direct alternatives.**

-   **REST** is an architectural style for designing networked services.
-   **FastAPI** is a Python web framework used to build APIs and web
    applications.

## What Is a REST API?

REST stands for **Representational State Transfer**. REST-style APIs
commonly expose resources through URLs and use HTTP methods.

  HTTP Method   Typical Purpose
  ------------- --------------------------------------------
  `GET`         Retrieve data
  `POST`        Create a resource or initiate an operation
  `PUT`         Replace a resource
  `PATCH`       Partially update a resource
  `DELETE`      Delete a resource

Example:

``` http
GET /students/10
```

This endpoint could retrieve the student with ID `10`.

## What Is FastAPI?

FastAPI is a Python framework that supports type hints, request
validation, and automatically generated interactive API documentation.

### Example

``` python
from fastapi import FastAPI

app = FastAPI()

@app.get("/students/{student_id}")
def get_student(student_id: int):
    return {
        "id": student_id,
        "name": "Saad",
        "semester": 5
    }
```

A request to `/students/10` can return:

``` json
{
  "id": 10,
  "name": "Saad",
  "semester": 5
}
```

## Comparison

  -----------------------------------------------------------------------
  REST API                            FastAPI
  ----------------------------------- -----------------------------------
  An API design approach/style        A Python web framework

  Describes architectural principles  Provides tools to implement
                                      endpoints

  Can be implemented with many        Uses Python
  languages/frameworks                

  Not a framework                     Can build REST-style APIs and other
                                      HTTP interfaces
  -----------------------------------------------------------------------

## Remember

FastAPI can be used to build REST-style APIs, but a FastAPI application
does not automatically follow every REST constraint.

## Quick Revision

1.  What does REST stand for?
2.  Is FastAPI a programming language, framework, or architectural
    style?
3.  Which HTTP method is commonly used to retrieve a resource?
4.  Can REST APIs be built without FastAPI?
