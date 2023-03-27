function resizer (dom: HTMLElement, mousemove, cursor) {

  consoleLog('resizer(' + resizerID + ')');

  dom.style.cursor = cursor;
  dom.mousemove = mousemove;

  dom.onmousedown = function (e) {
    try {
      consoleLog('dom.onmousedown(e)');
      document.documentElement.addEventListener('mousemove', dom.doDrag, false);
      document.documentElement.addEventListener('mouseup', dom.stopDrag, false);
    } catch (e) {
      ErrorMessage('dom.onmousedown(...) failed! Your browser does not support this feature. ' + e.message);
    }
  };

  dom.ondrag = function (e) {
    if (e.which != 1) {
      consoleLog('mouseup');
      dom.stopDrag(e);
      return;
    }
    // consoleLog("doDrag(e)");
    dom.mousemove(e);
  };

  dom.stopDrag = function (e) {
    consoleLog('stopDrag(e)');
    document.documentElement.removeEventListener('mousemove', dom.doDrag, false);
    document.documentElement.removeEventListener('mouseup', dom.stopDrag, false);
  };
}
