
type Params ={
    profileId: string;

}
type SearchParams = {
    search: string;
}
const profileIdPage = ({params, searchParams} : {params: Params, searchParams: SearchParams}) => {
    console.log(params);
  return (
    <div>
      {params.profileId}
      
    </div>
  );
};

export default profileIdPage;
