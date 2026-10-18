# Alternatives to APIs

## What Does "Replacement of APIs" Mean?

This question can mean either alternatives to REST APIs or other ways to
exchange data. The right option depends on the system's requirements.

## Alternatives and Related Approaches

  -----------------------------------------------------------------------
  Approach                            When It Can Be Useful
  ----------------------------------- -----------------------------------
  GraphQL                             Clients need flexible selection of
                                      fields and related resources

  gRPC                                Efficient service-to-service
                                      communication

  SOAP                                Integrations requiring SOAP-based
                                      standards

  WebSocket                           Continuous two-way communication

  Server-Sent Events (SSE)            One-way server-to-client live
                                      updates

  Message queues                      Asynchronous jobs and event-driven
                                      processing

  File exchange                       Batch transfer using CSV, JSON, or
                                      XML

  Direct database access              Controlled internal environments;
                                      generally unsuitable for untrusted
                                      public clients

  SDKs/libraries                      Simplify access to a platform's
                                      existing capabilities
  -----------------------------------------------------------------------

## Example: Batch File Exchange

A university might export attendance records to a CSV file each night.
Another system imports that file the next morning.

If real-time updates are unnecessary, batch file exchange may be simpler
than making an API request for every record.

## Important Distinctions

-   **SDKs are not necessarily API replacements.** An SDK often makes an
    API easier to use.
-   **Webhooks are commonly part of an API ecosystem**, not a complete
    replacement for APIs.
-   **Message queues** help with asynchronous communication but do not
    replace every request-response API.
-   **Direct database access from public mobile apps is generally
    unsafe.** It can expose credentials and bypass server-side
    authorization. A backend should normally control access.

## How to Choose

Consider:

-   Does the application need real-time data?
-   Is communication one-way or two-way?
-   How much data is exchanged?
-   What are the security and authorization requirements?
-   Is the operation synchronous or asynchronous?

## Quick Revision

1.  When might GraphQL be useful?
2.  When are message queues useful?
3.  Why are SDKs not always replacements for APIs?
4.  Why is direct database access from an untrusted mobile app risky?
