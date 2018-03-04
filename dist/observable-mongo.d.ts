import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/observable/fromEvent';
import { MongoClient } from "mongodb";
import { Db } from "mongodb";
import { Collection } from "mongodb";
import { ObjectID } from "mongodb";
export declare function connectObs(uri: string): Observable<MongoClient>;
export declare function collectionsObs(db: Db): Observable<Collection<any>[]>;
export declare function collectionObs(db: Db, name: string): Observable<Collection<any>>;
export declare function createCollectionObs(name: string, db: Db): Observable<Collection<{}>>;
export declare function insertManyObs(objects: Array<{}>, collection: Collection<any>): Observable<Array<ObjectID>>;
export declare function findObs(collection: Collection<any>, queryConditions?: any): any;
export declare function dropObs(collection: Collection<any>): Observable<any>;