import React, { useState } from 'react'
import supabase from '../api/supabase'
import { AllData } from '../types/type'

const initialFormState: AllData = {
  uuid: '',
  serielnumbers: '',
  amounts: 0,
  transactiontype: '',
  transactiontypedatails: '',
  name: '',
  securedname: '',
  datetime: new Date(),
  details: { content: [] },
  spendingmethods: '',
  supportingpics: { content: [] },
  receiptpics: { content: [] },
  bankname: '',
  accountnumber: '',
  securedaccountnumber: '',
  cafesurl: '',
}

const CreateBankStatement = () => {
  const [formState, setFormState] = useState<AllData>(initialFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prevState => ({ ...prevState, [name]: value }))
  }

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: 'details' | 'supportingpics' | 'receiptpics') => {
    const { value } = e.target
    setFormState(prevState => ({ ...prevState, [key]: { content: value.split(',') } }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('bankstatement')
      .insert([formState])
    if (error) {
      console.error('Error inserting data:', error)
    } else {
      console.log('Data inserted successfully:', data)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">UUID</label>
          <input type="text" name="uuid" value={formState.uuid} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div> */}
        <div>
          <label className="block text-sm font-medium text-gray-700">일련번호</label>
          <input type="text" name="serielnumbers" value={formState.serielnumbers} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder='지출-230101-01' />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">거래유형</label>
            <input type="text" name="transactiontype" value={formState.transactiontype} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder='지출' />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">거래유형상세 (제휴후원)</label>
            <input type="text" name="transactiontypedatails" value={formState.transactiontypedatails} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder='제휴후원' />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">거래일시</label>
            <input 
              type="datetime-local" 
              name="datetime" 
              value={formState.datetime.toISOString().slice(0, 16)}
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
            />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">금액</label>
          <input type="number" name="amounts" value={formState.amounts} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder='10000' />
        </div>
        {/* Add similar input fields for other properties */}
        <div>
          <label className="block text-sm font-medium text-gray-700">지출내역 (3개 권장, 콤마로 구분)</label>
          <textarea name="details" value={formState.details.content.join(',')} onChange={(e) => handleArrayChange(e, 'details')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">지출현장사진 (최대 2개, 콤마로 구분)</label>
          <textarea name="supportingpics" value={formState.supportingpics.content.join(',')} onChange={(e) => handleArrayChange(e, 'supportingpics')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">영수증사진 (최대 2개, 콤마로 구분)</label>
          <textarea name="receiptpics" value={formState.receiptpics.content.join(',')} onChange={(e) => handleArrayChange(e, 'receiptpics')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">은행명</label>
          <input type="text" name="bankname" value={formState.bankname} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">계좌번호</label>
          <input type="text" name="accountnumber" value={formState.accountnumber} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">가려진 계좌번호</label>
          <input type="text" name="securedaccountnumber" value={formState.securedaccountnumber} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">등록하기</button>
      </form>
    </div>
  )
}

export default CreateBankStatement