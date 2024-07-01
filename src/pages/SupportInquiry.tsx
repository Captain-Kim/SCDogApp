import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import LoadingSpinner from '../components/Loading';

const SupportInquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // id 대신 name 속성 사용
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email
    };
    emailjs.send('service_u8gcnkl', 'template_c3f379p', templateParams, '6j97ceqOgu7ddqbYW')
      .then(() => {
        alert('문의가 성공적으로 전송되었습니다. 수일 내 작성해주신 이메일로 답변해드리겠습니다. 입력하신 이메일이 올바르지 않을 시 답변이 도착하지 않을 수 있습니다.');
        setFormData({ name: '', email: '', message: '' }); // 폼 데이터 초기화
      }, () => {
        alert('문의 전송에 실패했습니다. 다시 시도해 주세요.');
      })
      .finally(() => {
        setLoading(false); // 로딩 종료
      });
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">후원 문의</h1>
      <p className="mb-5">
        후원에 대한 문의사항이 있으시면 아래 양식을 작성해 주세요. 최대한 빠르게 답변드리겠습니다.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">문의 내용</label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-gray-300 p-2 rounded"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition-colors float-right"
        >
          제출
        </button>
      </form>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default SupportInquiry;
