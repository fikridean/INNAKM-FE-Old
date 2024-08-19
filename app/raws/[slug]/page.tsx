import PortalDetail from './PortalDetail';
import BackButton from '../../components/BackButton';

export default function ShowPortalDetail(data: { params: { slug: string } }) {
  try {
    const slug = data.params.slug;

    return (
      <div>
        <BackButton />
        <h1 className='mt-4'>Get Detail Portal</h1>
        <PortalDetail slug={slug} />
      </div>
    );

  } catch (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{(error as Error).message}</p>
      </div>
    )
  }
}