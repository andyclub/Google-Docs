function onOpen() {
  // Add a menu with some items and a sub-menu.  
  DocumentApp.getUi().createMenu('Insert time')
      .addItem('Insert Date & Hours', 'insertAtCursor')
      .addItem('Insert Date & Hours & Minutes', 'insertAtCursorwithminutes')
      .addItem('Insert Date & Hours & Minutes China', 'insertAtCursorwithminutesChina')
      .addToUi();
}

/**
 * Inserts the date at the current cursor location in boldface, appends 2 blank lines, moves cursor to the end at the last blank line.
 * Time format: yyyy=MM=dd:HH TimeZone name
 */
function insertAtCursor() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  if (cursor) {
    // Attempt to insert text at the cursor position. If insertion returns null,
    var date = Utilities.formatDate(new Date(), Session.getTimeZone(), "yyyy-MM-dd:HH"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
  }
  cursor.insertText("\n\n");
  var element = cursor.insertText(date + " TZ: " + Session.getTimeZone());
  element.setBold(true);
  var txtEl=cursor.getElement();
  var txtOff=cursor.getOffset();
  var pos=DocumentApp.getActiveDocument().newPosition(txtEl, txtOff + 2);
  DocumentApp.getActiveDocument().setCursor(pos);
}

/**
 * Inserts the date at the current cursor location in boldface, appends 2 blank lines, moves cursor to the end at the last blank line.
 * Time format: yyyy=MM=dd HH:mm TimeZone name
 */
function insertAtCursorwithminutes() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  if (cursor) {
    // Attempt to insert text at the cursor position. If insertion returns null,
    timezone = "GMT+" + new Date().getTimezoneOffset()/60
    var date = Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd HH:mm"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
  }
  cursor.insertText("\n\n");  
  var element = cursor.insertText(date + " TZ: " + timezone);
  element.setBold(true);
  var txtEl=cursor.getElement();
  var txtOff=cursor.getOffset();
  var pos=DocumentApp.getActiveDocument().newPosition(txtEl, txtOff + 2);
  DocumentApp.getActiveDocument().setCursor(pos);
}

//China only
function insertAtCursorwithminutesChina() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  if (cursor) {
    // Attempt to insert text at the cursor position. If insertion returns null,
    var date = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd HH:mm"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
  }
  cursor.insertText("\n\n");  
  var element = cursor.insertText(date + " TZ: Beijing, China (GMT+8)" );
  element.setBold(true);
  var txtEl=cursor.getElement();
  var txtOff=cursor.getOffset();
  var pos=DocumentApp.getActiveDocument().newPosition(txtEl, txtOff + 2);
  DocumentApp.getActiveDocument().setCursor(pos);
}