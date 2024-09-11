

const Comment = ({data})=>{
    console.log(data)

   
    
    return (
        <div>Comment</div>
    )
}
const CommentSeaction = () => {
    const commentDetails = [
        
            {
                "id": 1,
                "name": "John Doe",
                "text": "This is a great article about web development!",
                "timestamp": "2024-09-11T10:00:00Z",
                "replies": [
                    {
                        "id": 2,
                        "name": "Jane Smith",
                        "text": "I totally agree, web development is evolving so fast.",
                        "timestamp": "2024-09-11T10:15:00Z",
                        "replies": [
                            {
                                "id": 3,
                                "name": "John Doe",
                                "text": "Indeed! Especially with all the new JavaScript frameworks.",
                                "timestamp": "2024-09-11T10:20:00Z",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "name": "Alice Brown",
                "text": "Does anyone have experience with the new React version?",
                "timestamp": "2024-09-11T11:00:00Z",
                "replies": [
                    {
                        "id": 5,
                        "name": "Bob Johnson",
                        "text": "Yes, I have been using it recently. It’s much faster with the new features.",
                        "timestamp": "2024-09-11T11:05:00Z",
                        "replies": [
                            {
                                "id": 6,
                                "name": "Alice Brown",
                                "text": "That's great to hear! I'm planning to upgrade soon.",
                                "timestamp": "2024-09-11T11:10:00Z",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
            {
        }
    ]
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comment</h1>
            <Comment data={commentDetails[0]}/>
        </div>
    )
}

export default CommentSeaction