# Traditional Databases vs Non-Traditional Databases

## Overview

In many introductory courses, **traditional database** means a
relational SQL database, while **non-traditional database** often refers
to NoSQL database families. These labels are broad and do not capture
every modern database design.

## Relational / SQL Databases

Relational databases organize data into tables containing rows and
columns. They commonly use SQL and support relationships, constraints,
and transactions.

### Example Table

    id name     semester
  ---- ------ ----------
     1 Saad            5
     2 Ali             3

SQL query:

``` sql
SELECT name, semester
FROM students
WHERE semester = 5;
```

This returns students whose semester is 5.

Examples: PostgreSQL, MySQL, Microsoft SQL Server.

## Non-Relational / NoSQL Databases

NoSQL is a broad family that includes document, key-value, wide-column,
and graph data models.

### Example Document

``` json
{
  "student_id": 1,
  "name": "Saad",
  "semester": 5,
  "skills": ["Python", "JavaScript"]
}
```

Examples include MongoDB (document), Redis (key-value), Cassandra
(wide-column), and Neo4j (graph).

## Comparison

  -----------------------------------------------------------------------
  Feature                 Relational SQL          NoSQL Families
  ----------------------- ----------------------- -----------------------
  Data model              Tables, rows, columns   Documents, key-value,
                                                  wide-column, graphs,
                                                  and others

  Schema                  Usually defined and     Often flexible,
                          constrained             depending on database
                                                  and validation

  Querying                SQL                     Database-specific query
                                                  methods; some have
                                                  SQL-like languages

  Relationships           Foreign keys and joins  Embedding, references,
                          are common              graph edges, or other
                                                  models

  Typical strengths       Structured data,        Flexible data models or
                          relational queries,     workload-specific
                          transactions            scalability

  Examples                PostgreSQL, MySQL, SQL  MongoDB, Redis,
                          Server                  Cassandra, Neo4j
  -----------------------------------------------------------------------

## Choosing a Database

-   **Banking ledger or relational records:** PostgreSQL may be a strong
    fit.
-   **Document-oriented product catalog:** MongoDB may be suitable.
-   **Caching and short-lived session data:** Redis may be suitable.
-   **Complex network relationships:** Neo4j may be suitable.

NoSQL does not mean "no structure" or "no consistency." Select a
database based on requirements, queries, consistency, scale, and
operational constraints.

## Quick Revision

1.  What is a relational database?
2.  What is NoSQL?
3.  Give one example of a document database and one key-value database.
4.  Why should database selection depend on requirements?
