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
  getClientesAlex() {
    return this.firestore.collection('alex').snapshotChanges();
  }
  createSiteAlex(infos) {
    return this.firestore.collection('landpages').add(infos);
  }
  updateSiteAlex(infos) {
    delete infos.id;
    this.firestore.doc('landpages/' + 'LzmwlMqI4fSoNtgcUrfm').update(infos);
  }
  getPages() {
    return this.firestore.collection('landpages').snapshotChanges();
  }
  getAlexPager() {
    return this.firestore.doc('landpages/' + 'LzmwlMqI4fSoNtgcUrfm').snapshotChanges();
  }
}
