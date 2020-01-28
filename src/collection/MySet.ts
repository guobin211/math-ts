/**
 * MySet
 * @author guobin201314@gmail.com on 2019-03-09
 */
export class MySet {
	private readonly collection: any[];

	constructor() {
		this.collection = [];
	}

	has(el: any): boolean {
		return this.collection.indexOf(el, 0) !== -1;
	}

	values(): any[] {
		return this.collection;
	}

	add(el: any): boolean {
		if (this.has(el)) {
			return false;
		} else {
			this.collection.push(el);
			return true;
		}
	}

	size(): number {
		return this.collection.length;
	}

	remove(el: any): boolean {
		if (this.has(el)) {
			const index = this.collection.indexOf(el);
			this.collection.splice(index, 1);
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 并集
	 * @param otherSet
	 */
	public union(otherSet: MySet): Set<any> {
		const unionSet = new Set();
		const firstSet = this.values();
		const secondSet = otherSet.values();
		firstSet.forEach((el) => unionSet.add(el));
		secondSet.forEach((el) => unionSet.add(el));
		return unionSet;
	}

	/**
	 * 交集
	 * @param otherSet
	 */
	public intersection(otherSet: MySet): Set<any> {
		const intersection = new Set();
		const first = this.values();
		first.forEach((el) => {
			if (otherSet.has(el)) {
				intersection.add(el);
			}
		});
		return intersection;
	}

	/**
	 * 差集
	 * @param otherSet
	 */
	public difference(otherSet: MySet): Set<any> {
		const difference = new Set();
		const first = this.values();
		first.forEach((el) => {
			if (!otherSet.has(el)) {
				difference.add(el);
			}
		});
		return difference;
	}

	/**
	 * 子集
	 * @param otherSet
	 */
	public subset(otherSet: MySet): boolean {
		const first = this.values();
		return first.every((value) => {
			return otherSet.has(value);
		});
	}
}
