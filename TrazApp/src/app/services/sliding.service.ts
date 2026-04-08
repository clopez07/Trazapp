import { Injectable } from '@angular/core';
import { IonList } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class SlidingService {
  private lists: IonList[] = [];

  registerList(list: IonList): void {
    if (list && !this.lists.includes(list)) {
      this.lists.push(list);
    }
  }

  unregisterList(list: IonList): void {
    this.lists = this.lists.filter(l => l !== list);
  }

  async closeAll(): Promise<void> {
    for (const list of this.lists) {
      try { await list.closeSlidingItems(); } catch {}
    }
  }
}
