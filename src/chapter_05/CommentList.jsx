import Comment from "./Comment";

const comments = [
    {
        name: '홍길동',
        comment: '안녕하세요, 홍길동 입니다.',
    },
    {
        name: '전우치',
        comment: '리액트 재밌네요~~.',
    },
    {
        name: 'XXX',
        comment: '저도 리액트 배워 보고 싶어요.',
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment
                        name={comment.name}
                        comment={comment.comment}
                    />
                );
            })}
        </div>
    );
}

export default CommentList;