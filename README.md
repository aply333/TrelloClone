# Project Goals:
* Improve personal ability to write react applications.
    * Learn to use and implement drag and drop functionality.
    * To Practice building react app components without styled-components.
    * To improve my documentation of work/code.
    ---
* Create and setup a python flask backend. Will be done in seperate repository.

## Jan 12 2021:
### What was done.
Created Custome Hook To Manage Card/Column State:
#### cardManage:
* insertNewColomn():
  * Takes an argumen, "column_title."
  * Appends a new colomn object, assigning id, title, and card array
* insertNewCard():
  * Takes two arguments "location" and "contents"
  * Using "location" it will append the new card to the corresponding column.
  * Using "Contents" it will populate card with appropriate data.
    * It will also assign a date of creation and id to the card
* relocateCard():
  * Takes two argument "dragId" and "destination".
  * The "dragId", is an array of ids, ["column_id", "card_id"].
  * Destination is the column_id of the card that we wish to move to.
  * With this, it will:
    1. Check if the destination is in fact different.
    2. Update state by adding card to the its new destination.
    3. Splice the card from its source.
    4. Run idCorrection(), to insure that the source is in order.
* idCorrection():
   * This function is internal to the custom hook.
   * It will loop through a given array, check if the index of the array matches the id. If id does not match, it will then update and correct the Id.
---
Replace old state management, with the new custome hooks. Cleaning up the code.

## Jan 11 2021:
### What was done.
Created Basic Layout Of Trello Clone.
Worked out state logic for cards and columns.
* Created base state object structure.
Implemented Click and drag functionality.
### What is currently being worked on.
Refactor card logic and column logic.
Creating custom hooks to manage board state.
* Make Code more legible.
* Improve overall performance.
* Improve modularity.
* Ensure state consistency.


---
## Packages Used:
* React
   * ReactDnD
   * React Hook Form
---
## Color Pallete:
1. Ivory: 
   * #F5F9E9
2. Ebony: 
   * #515751
3. Cadet: 
   * #596869
4. Kombu:
   * #36453B
5. Sage: 
   * #C2C1A5
