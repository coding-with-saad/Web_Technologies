# API Types and Their Use Cases

## What Is an API?

API stands for **Application Programming Interface**. It defines how
software components communicate with each other.

For example, a university portal can request attendance data from a
backend through an API.

## Common API Types

These categories use different classification criteria, so they can
overlap.

  -----------------------------------------------------------------------
  Type                    Description             Use Cases
  ----------------------- ----------------------- -----------------------
  REST API                Uses HTTP resources and Student portals,
                          methods following       e-commerce
                          REST-style design       

  SOAP API                Uses structured XML     Enterprise integrations
                          messages and formal     
                          web-service standards   

  GraphQL API             Lets clients request    Complex dashboards and
                          specific fields and     mobile apps
                          related data            

  RPC API                 Lets clients invoke     Internal services
                          operations on another   
                          system                  

  gRPC API                High-performance RPC    Microservices
                          framework, commonly     
                          using Protocol Buffers  

  WebSocket API           Supports persistent     Chat and live updates
                          two-way communication   

  Browser API             Provides browser        Geolocation,
                          capabilities            notifications, local
                                                  storage

  Operating System API    Exposes OS              Files, processes,
                          functionality           device capabilities

  SDK/library API         Exposes functions from  Maps, payments,
                          a software library or   analytics
                          SDK                     
  -----------------------------------------------------------------------

## APIs by Access

-   **Public API:** Intended for external developers under defined
    access rules.
-   **Partner API:** Available to selected partners.
-   **Private/Internal API:** Used inside an organization.
-   **Composite API:** Combines multiple operations or resources into
    one workflow.

## Example: Food Delivery App

A food delivery app might use:

-   REST for restaurants and orders.
-   WebSockets for live order status.
-   A payment webhook for payment events.
-   A Maps API for routes.
-   Internal APIs between backend services.

## Important Note

A webhook is an event notification, often delivered over HTTP. It is
related to API ecosystems, not necessarily a replacement for an API.

## Quick Revision

1.  What does API stand for?
2.  Which API approach could support live two-way chat?
3.  What is the difference between a public API and a private API?
4.  Can one application use several API types?

## Key Takeaway

An API provides an interface for software communication. The best API
type depends on the application's requirements, such as data access,
real-time updates, performance, and integration needs.
