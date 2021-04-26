import Action from "./interfaces/action";

const cacheMiddleware = (store: any) => (next: Function) => (action: Action) => {
    console.log(store, action);
    next(action);
};

export default cacheMiddleware;