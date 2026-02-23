# Specification

## Summary
**Goal:** Add a 5-second loading state with optimization messages after device name entry before showing the sensitivity popup.

**Planned changes:**
- Display a loading state when the Generate button is clicked in DeviceNameScreen.tsx
- Show sequential messages during loading: "optimising your device" and "generating sensitivity for your device"
- Implement a 5-second delay before displaying the sensitivity popup with generated values
- Disable or show loading indicator on the Generate button during the delay

**User-visible outcome:** After entering a device name and clicking Generate, users will see a 5-second loading animation with optimization messages before the sensitivity popup appears with their generated values.
