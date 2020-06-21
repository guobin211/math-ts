export function EasyMap(this: any) {
    this.map = Object.create(null);
}

EasyMap.prototype.get = function(key: string) {
    return this.map[key];
};

EasyMap.prototype.set = function(key: string, value: any) {
    this.map[key] = value;
};

EasyMap.prototype.has = function(key: string) {
    for (const mapKey in this.map) {
        if (mapKey === key) {
            return true;
        }
    }
    return false;
};

EasyMap.prototype.remove = function(key: string) {
    delete this.map[key];
};
