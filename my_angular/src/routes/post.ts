import { Router, Request } from 'express';
import Post from '../models/Post';
import { Response } from 'express-serve-static-core';
const postRouter = Router();

//getPost
postRouter.get('', async(req: Request, res: Response) => {
	const posts = await Post.find({});
	res.status(200).json(posts);
})

//addPost
postRouter.post('', async (req: Request, res: Response) => {
    const postData = {
        title: req.body.title,
        text: req.body.text 
    };
    const post = new Post(postData);
    await post.save();
    res.status(201).json(post);
});

//deletelPost
postRouter.delete('/:id', async (req: Request, res: Response) => {
    await Post.remove({
        _id: req.params.id
    });
    res.status(200).json({
        message: `Удалено ${req.params.id}`
    })
});

export default postRouter;