import React, { useState } from "react";
import User from "./components/User";
import Button from "./components/Button";

//age가 25세 이상인 user는 제외하고 렌더링 해보세요

const App = () => {
    //const vegitables = ["감자", "고구마", "오이", "가지", "옥수수"];

    const [users, setUsers] = useState([
        {
            id: new Date().getTime(),
            age: 30,
            name: "송중기",
        },
        {
            id: new Date().getTime() + 1,
            age: 33,
            name: "아중기",
        },
        {
            id: new Date().getTime() + 2,
            age: 130,
            name: "송어기",
        },
        {
            id: new Date().getTime() + 3,
            age: 10,
            name: "중기",
        },
    ]);
    const [name, setName] = useState(0);
    const [age, setAge] = useState("");

    const addUserHandler = () => {
        //user에
        // console.log("age ==> ", age);
        // console.log("name ===>", name);
        const newUser = {
            id: new Date().getTime(),
            age: age,
            name: name,
        };

        setUsers([...users, newUser]);
    };
    const deleteUserHander = (id) => {
        const deletedUsers = users.filter(function (user) {
            return user.id != id;
        });

        setUsers(deletedUsers);
    };
    return (
        <>
            <input
                type="number"
                value={age}
                onChange={(e) => {
                    setAge(e.target.value);
                }}
            ></input>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></input>
            <Button color="green" onClick={addUserHandler}>
                추가
            </Button>
            <div
                style={{
                    margin: "50px 50px 0px 0px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                }}
            >
                {/* {users.map(function (user) {
                    if (user.age < 25) {
                        return <User key={user.id} user={user} deleteUserHander={deleteUserHander} />;
                    }
                })} */}
                {users //users가 배열이기 때문에 filter가 가능 -> filter는 새로운 배열이 리턴
                    //filter + map 조합은 자주 사용하는 조합
                    .filter(function (u) {
                        return u.age < 25;
                    })
                    .map(function (user) {
                        return <User key={user.id} user={user} deleteUserHander={deleteUserHander} />;
                    })}
            </div>
        </>
    );
};

export default App;
