import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CeSessionsService {
  private sessions: number[] = [];

  private sessionsChangeSubject = new Subject<number[]>();

  get onSessionsChange() {
    return this.sessionsChangeSubject.asObservable();
  }

  setCount(count: number) {
    this.sessions = new Array(count).fill(1);
    this.sessionsChangeSubject.next(this.sessions);
  }
}
