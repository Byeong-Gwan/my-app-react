const students = [
    {
        id: 1,
        name: 'Inje',
    },
    {
        id: 2,
        name: 'Steve',
    },
    {
        id: 3,
        name: 'Bill',
    },
    {
        id: 4,
        name: 'Jeff',
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {/* 1. key 값 사용 - id를 key 값으로 사용 */}
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}

            {/* 2. key 값 사용 - 포맷팅 된 문자열을 키값으로 사용 */}
            {/* {students.map((student, index) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>
            })} */}

            {/* 3. key 값 사용 - 배열의 인덱스를 키값으로 사용 */}
            {/* {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })} */}
        </ul>
    )
}

export default AttendanceBook;