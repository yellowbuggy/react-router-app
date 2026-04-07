import { useParams, useNavigate } from "react-router-dom";

export default function UserDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <h2>사용자 상세 페이지 - ID: {id}</h2>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  )
}