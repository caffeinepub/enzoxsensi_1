# Specification

## Summary
**Goal:** Generate random sensitivity values for each device instead of using static values.

**Planned changes:**
- Replace static sensitivity values (General: 176, Red Dot: 98, 2x: 190, 4x: 190) with randomly generated values
- Generate random values within sensible gaming ranges: General (50-200), Red Dot (50-150), 2x (100-250), 4x (100-250)
- Each click of the Generate button produces a new set of random sensitivity values
- Each device name generates its own unique set of random values

**User-visible outcome:** Users can generate random sensitivity configurations for their devices, with different values appearing each time they click the Generate button.
