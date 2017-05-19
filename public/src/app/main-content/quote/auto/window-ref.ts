import {Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
function _window(): any {

  return window;
}

function _document(): any {
  return document;
}

@Injectable()
export class WindowRef {

  get nativeWindow(): any {
    return _window();
  }

  get document(): any {
    return _document();
  }
}
