import { BehaviorSubject, distinctUntilChanged, from, map, Observable } from "rxjs";



export class StateService<T> {
    private state$: BehaviorSubject<T>;
    protected get state(): T {
        return this.state$.getValue();
    }

    constructor(initialState: T) {
        this.state$ = new BehaviorSubject<T>(initialState);


        // T1 ==> distinctUntilChanged
        // const source$ = from([1, 1, 2, 2, 3, 3]);
        // source$.pipe(distinctUntilChanged()).subscribe(console.log);


        // T2 ==> distinctUntilChanged
        // const baseObject = { name: 'Mahdi' };
        // const source2$ = from([baseObject, baseObject, baseObject])
        // source2$.pipe(distinctUntilChanged()).subscribe(console.log);

        
        // T3 ==> distinctUntilChanged
        // const source3$ = from([
        //     { name: 'Ali' },
        //     { name: 'Mahdi' },
        //     { name: 'Mahdi' },
        //     { name: 'Masuod' }
        // ])
        // source3$.pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name)).subscribe(console.log)
    }

    protected select<K>(mapFn: (state: T) => K): Observable<K> {
        return this.state$.asObservable().pipe(
            map((state: T) => mapFn(state)),
            distinctUntilChanged()
        );
    }

    protected setState(newState: Partial<T>) {
        this.state$.next({
            ...this.state,
            ...newState
        })
    }
}