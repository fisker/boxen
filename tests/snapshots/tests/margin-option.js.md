# Snapshot report for `tests/margin-option.js`

The actual snapshot is saved in `margin-option.js.snap`.

Generated by [AVA](https://avajs.dev).

## margin option works

> Snapshot 1

    `␊
    ␊
          ┌───┐␊
          │foo│␊
          └───┘␊
    ␊
    `

## margin option with custom margins

> Snapshot 1

    `␊
      ┌───┐␊
      │foo│␊
      └───┘␊
    ␊
    ␊
    ␊
    `

## margin option with padding

> Snapshot 1

    `␊
       ┌─────────┐␊
       │         │␊
       │   foo   │␊
       │         │␊
       └─────────┘␊
    `

## margin proportionally decreases when content <= columns

> Snapshot 1

    `␊
    ␊
          ┌────────────────────────────┐␊
          │xxxxxxxxxxxxxxxxxxxxxxxxxxxx│␊
          └────────────────────────────┘␊
    ␊
    `

> Snapshot 2

    `␊
    ␊
       ┌────────────────────────────────────────────────────┐␊
       │xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx│␊
       └────────────────────────────────────────────────────┘␊
    ␊
    `

> Snapshot 3

    `␊
    ␊
    ┌──────────────────────────────────────────────────────────┐│axaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxax││axaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxax│└──────────────────────────────────────────────────────────┘␊
    ␊
    `
