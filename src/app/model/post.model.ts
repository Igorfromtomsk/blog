export class Post {
    constructor(
        public id?: number,
        public title?: string,
        public text?: string,
        public created_at?: string,
        public tags?: object
    ) {}
}
