export default function Assistido({ visto }){
    if ( visto ){
      return <p className="text-success">Assistido</p>
    }else {
      return <p className="text-danger">Não assistido</p>
    }  
}