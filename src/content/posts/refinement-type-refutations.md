---
title: Refinement Type Refutations
summary: How can a verification tool explain why a program fails to type check?
date: 2024-06-29
authors:
  - Robin Webbers
  - Klaus v. Gleissenthall
tags:
  - liquid types
  - counterexamples
image: /assets/img/root.png
draft: false
---

Refinement types are a lightweight way to statically verify properties of programs. They let us annotate ordinary types with logical predicates that restrict the values inhabitants of the type may take.

For example, a non-zero integer type can be written as:

```haskell
type NonZero = Int{v:v /= 0}
```

This kind of type can rule out familiar runtime errors such as division by zero. The checker proves at compile time that whenever a function requiring `NonZero` is called, the argument really satisfies the refinement.

## When Verification Fails

Verification failures are often difficult to understand. Existing checkers tend to report that something failed, but provide little guidance about why the failure follows from the types and abstractions involved.

This is especially challenging for refinement type systems because their strength is modularity: the checker reasons from the information present in types rather than enumerating runtime traces.

![Liquid Haskell error](/assets/img/lh-error.png)

## Haystack

To make verification failures easier to debug, we built Haystack, a tool for explaining refinement typing failures. The accompanying Explorer interface lets users inspect a failed typing judgment and navigate the structure of the refutation.

![Haystack Explorer root screen](/assets/img/root.png)

The key idea is a **refinement type refutation**: a mathematical object that explains why a typing derivation cannot be completed. It identifies both a path to the failing sub-expression and concrete variable instances that violate the generated constraints.

This work appears in our OOPSLA 2024 paper with Ranjit Jhala.
