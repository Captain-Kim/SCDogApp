import { useParams } from 'react-router-dom';

const SponsorDetail = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <h1>Sponsor Detail Page for ID: {id}</h1>
    )
};

export default SponsorDetail;