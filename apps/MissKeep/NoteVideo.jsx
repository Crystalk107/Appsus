export default class NoteVideo extends React.Component {

    state = {
        videoUrl: null,
        videoValues: '?autoplay=1;mute=1'

    }

    sliceStr = () => {
        const { props } = this;
        console.log(props.note.info.url)
        let originalUrl = props.note.info.url
        let sliceOriginalUrl = originalUrl.slice(32, originalUrl.length)
        let embedUrl = 'https://www.youtube.com/embed/'
        let finaleResUrl = embedUrl + sliceOriginalUrl

        return finaleResUrl
    }



    render() {
        console.log(this.sliceStr())
        const { props } = this;
        return <div className="NoteVideo-container">
            <div className="Video-container flex center">
                <iframe width="560" height="315" src={this.sliceStr()+'?autoplay=1&mute=1&loop=1'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>

        </div>


    }




}