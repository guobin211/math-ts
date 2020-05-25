export function EasyMap() {
    const map = Object.create(null);
    map.prototype.get = function(key: string) {
        return this[key];
    };
    map.prototype.set = function(key: string, value: any) {
        return (this[key] = value);
    };
    map.prototype.has = function(key: string) {
        return this[key] === null;
    };
    map.prototype.remove = function(key: string) {
        delete this[key];
    };
    return map;
}
