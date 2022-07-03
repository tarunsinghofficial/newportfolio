export interface Post {
    _id: number;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    },
    comment: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    }
    slug: {
        current: string;
    };
    body: [object];
}

export interface Comment {
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
        _ref: string;
        _type: string;
    };
    _createdAt: string;
    _updatedAt: string;
    _id: string;
    _type: string;
    _rev: string;
}