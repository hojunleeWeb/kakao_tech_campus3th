import Button from "./Button";

const User = ({ user, deleteUserHander }) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        width: "150px",
        height: "150px",
        border: "1px solid green",
        borderRadius: "20px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    };

    const { age, name, id } = user;

    return (
        <div style={style}>
            <div>
                {age}살 - {name}
            </div>
            <div>
                <Button color="red" onClick={() => deleteUserHander(id)}>
                    삭제
                </Button>
            </div>
        </div>
    );
};

export default User;
