# RESTful API vs REST API

## Overview

The terms **REST API** and **RESTful API** are often used
interchangeably. In stricter technical usage, *RESTful* commonly
describes an API that follows REST principles closely.

REST stands for **Representational State Transfer**.

## Example of Less Resource-Oriented Design

``` http
GET  /getStudent?id=10
POST /createStudent
GET  /deleteStudent?id=10
```

The last endpoint is especially problematic because a `GET` request
should not normally perform a destructive action.

## More Resource-Oriented Design

``` http
GET    /students/10
POST   /students
PUT    /students/10
PATCH  /students/10
DELETE /students/10
```

This design represents students as resources and uses HTTP methods to
express operations.

## Comparison

  -----------------------------------------------------------------------
  REST API                            RESTful API
  ----------------------------------- -----------------------------------
  General term for an API described   Usually emphasizes closer adherence
  as REST-based                       to REST constraints

  Can be used informally              Describes the quality of the API's
                                      REST-oriented design

  The name alone does not prove full  Actual architecture must be
  compliance                          evaluated
  -----------------------------------------------------------------------

## Important REST Principles

REST constraints include:

-   Client-server separation.
-   Stateless requests.
-   Cacheability.
-   A uniform interface.
-   Layered system.
-   Optional code-on-demand.

The formal uniform-interface model includes hypermedia controls, often
discussed as HATEOAS. Many practical APIs do not implement every REST
constraint.

## Key Takeaway

Good endpoint naming is helpful, but naming URLs correctly does not
automatically make an API fully RESTful.

## Quick Revision

1.  What does REST stand for?
2.  Why is `GET /deleteStudent?id=10` a poor design?
3.  Why are REST API and RESTful API often used interchangeably?
4.  What does statelessness mean in REST?
