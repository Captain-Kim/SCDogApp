import React from 'react';

const MapPage: React.FC = () => {
    return (
        <div className="flex items-start justify-center min-h-screen p-6">
            <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold mb-4 text-center">찾아오시는 길</h1>
                <div
                    style={{
                        font: 'normal normal 400 12px/normal dotum, sans-serif',
                        width: '100%',
                        height: '392px',
                        color: '#333',
                        position: 'relative'
                    }}
                >
                    <div style={{ height: '360px' }}>
                        <a
                            href="https://map.kakao.com/?urlX=509475.0&urlY=539175.0&name=%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EA%B5%AC%EB%A6%BC%EB%A9%B4%20%EC%9B%94%EC%A0%95%EB%A6%AC%20888&map_type=TYPE_MAP&from=roughmap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="map"
                                src="http://t1.daumcdn.net/roughmap/imgmap/2a105a99db601443c829dc66e409b0c3903ecd3aee0653b4dd60d1e6ba13c433"
                                width="100%"
                                height="358px"
                                style={{ border: '1px solid #ccc' }}
                                alt="Map"
                            />
                        </a>
                    </div>
                    <div
                        style={{
                            overflow: 'hidden',
                            padding: '7px 11px',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '0px 0px 2px 2px',
                            backgroundColor: 'rgb(249, 249, 249)'
                        }}
                    >
                        <a
                            href="https://map.kakao.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ float: 'left' }}
                        >
                            <img
                                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                                width="72"
                                height="16"
                                alt="카카오맵"
                                style={{ display: 'block', width: '72px', height: '16px' }}
                            />
                        </a>
                        <div
                            style={{
                                float: 'right',
                                position: 'relative',
                                top: '1px',
                                fontSize: '11px'
                            }}
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://map.kakao.com/?from=roughmap&eName=%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EA%B5%AC%EB%A6%BC%EB%A9%B4%20%EC%9B%94%EC%A0%95%EB%A6%AC%20888&eX=509475.0&eY=539175.0"
                                style={{
                                    float: 'left',
                                    height: '15px',
                                    paddingTop: '1px',
                                    lineHeight: '15px',
                                    color: '#000',
                                    textDecoration: 'none'
                                }}
                            >
                                길찾기
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>주소: 전북특별자치도 순창군 구림면 월정리 888</p>
                    <p>순창군 소득개발시험포 교육장 옆 건물</p>
                </div>
            </div>
        </div>
    );
};

export default MapPage;