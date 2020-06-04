import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FbApiService {
  constructor(private firestore: AngularFirestore) {}
  getClientes() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }
  getClientesAlex(){
    return this.firestore.collection('alex').snapshotChanges();
  }
}
