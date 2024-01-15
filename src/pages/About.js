import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const About = () => {
  return (
    <div>
      About Page
      <input type='text' placeholder='Enter here'/><br/>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        Width: 'fit-Content',
      }}>
        <Link to='featured'><h4 style={{
          color: 'black',
          border: '2px solid black',
        }}>Featured</h4></Link>
        <Link to='new'><h4 style={{
          color: 'black',
          border: '2px solid black',
        }}>New</h4 ></Link>
      </div>
      <Outlet />
      <br/>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus aliquet massa. Praesent consectetur congue odio, a ultrices nisi congue nec. Nunc nec ex libero. Nulla facilisis consectetur turpis, at semper purus maximus sit amet. Mauris ut dignissim neque, in commodo massa. Etiam sit amet tortor erat. Nam ultrices consequat dolor at sodales. Fusce convallis risus purus, id facilisis nisi lacinia vel. Suspendisse ipsum ante, auctor et elit ut, pharetra cursus orci. In mi libero, scelerisque non neque vel, rhoncus consequat nisi. Morbi vel diam nec odio faucibus pellentesque sit amet vel lectus. Nulla ut massa aliquet ipsum venenatis molestie eget et quam. Maecenas efficitur volutpat leo, ut maximus lacus gravida sed. Nunc eu consequat tellus, eget consectetur quam. Duis nec neque enim.

Vestibulum vitae pulvinar eros, quis sollicitudin mi. Nam id dignissim augue. Sed convallis lacus non pretium rhoncus. Morbi pretium congue nunc non pulvinar. Nunc sed neque vitae tellus congue tempus. Donec placerat sed nunc a viverra. Nullam gravida luctus nisl, ac consectetur sem accumsan ut. Fusce turpis nulla, posuere vitae convallis vitae, faucibus nec justo.

Curabitur malesuada, mi non imperdiet aliquam, ante libero pharetra turpis, ut efficitur dui dui in lectus. Suspendisse blandit luctus lectus vitae sollicitudin. Sed fringilla enim elit, quis accumsan lectus tempus sit amet. Phasellus quis purus at sapien tempus volutpat. Aenean orci risus, venenatis ut lectus a, efficitur lobortis mauris. Aenean et ullamcorper nibh, in tempus odio. Nam ut dolor non sem dapibus scelerisque at vulputate mi. Proin velit sem, porta et feugiat sit amet, elementum sit amet elit.

Maecenas molestie feugiat leo, eu volutpat ligula pulvinar a. Pellentesque venenatis, eros eget malesuada pulvinar, erat dui sagittis lorem, sit amet scelerisque erat libero quis felis. Pellentesque quis est diam. Sed efficitur rhoncus lorem, sed pellentesque ex commodo ac. Nam commodo aliquet pharetra. Nulla id leo et purus finibus blandit. Nunc nec diam risus. Mauris laoreet est ante, et iaculis neque tristique tempus. Sed vel pretium leo, non vestibulum neque. Sed volutpat sem vitae turpis vulputate, nec aliquet urna iaculis. Sed eu dictum odio, imperdiet molestie risus. Integer congue, neque dapibus suscipit condimentum, diam quam varius magna, vitae cursus ante nibh eget augue.

Curabitur congue pellentesque eros, vel auctor purus molestie et. Aenean dignissim, felis vitae maximus varius, est sapien suscipit metus, at viverra velit quam eu dolor. Donec euismod arcu ut lacus molestie, non commodo nunc maximus. Fusce imperdiet turpis vel sagittis convallis. Etiam sit amet mi ac turpis congue suscipit. Aliquam et purus urna. Ut venenatis sed leo quis imperdiet. Fusce justo ex, rhoncus ut molestie a, consequat non magna. Proin molestie tincidunt viverra. Etiam aliquam rhoncus tortor, tempus luctus dui fermentum ultrices.

Ut dignissim nulla vitae malesuada bibendum. Vestibulum venenatis tristique tincidunt. Donec ut massa nisl. Morbi tortor erat, varius quis nulla ut, faucibus laoreet libero. Vestibulum sollicitudin tristique imperdiet. Morbi suscipit molestie ornare. Suspendisse nec leo a eros egestas consectetur at non risus. Curabitur sed dolor tristique, mollis ante eu, fermentum augue.

Sed vel mi sed turpis commodo imperdiet id finibus est. Sed faucibus eget ipsum sagittis imperdiet. Nulla fringilla quam dapibus justo hendrerit suscipit quis id dolor. Mauris ac aliquam tellus, sit amet cursus ligula. Ut varius interdum sodales. Integer sodales, turpis id volutpat ultricies, nisl ligula iaculis neque, eget lacinia eros nulla ac nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus rutrum turpis, eu gravida purus ultricies at. Nam dignissim dui id orci scelerisque tristique. Vestibulum ut nisl tristique, consequat nisl sed, ultrices nisl. Integer posuere nulla nec mauris ornare suscipit.

Vestibulum laoreet sem id orci mollis luctus. Donec quis odio porta, pretium elit vel, rhoncus mauris. Cras sit amet magna est. Pellentesque eu commodo lorem. Pellentesque finibus libero leo, non dictum est sagittis eget. Praesent posuere dui sed diam porttitor accumsan eu at arcu. Proin sagittis justo vel dictum malesuada. Aliquam ultrices felis diam, nec malesuada leo luctus eu. Nullam fermentum ultrices neque, ut fringilla ipsum elementum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus ipsum a ultricies blandit. Nullam tristique mollis mi, in semper nibh semper posuere.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean ut gravida nulla. Nam non finibus ex. Ut sollicitudin justo non libero tempus, non facilisis diam rhoncus. Mauris dapibus viverra purus. Vestibulum ligula justo, dignissim ut sapien nec, laoreet tincidunt arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend elit at lacus faucibus semper. Ut eget blandit risus.

Aliquam pellentesque eros at est euismod hendrerit. Pellentesque quis commodo mauris. Suspendisse vulputate, lacus ac sodales rhoncus, tortor neque congue magna, ac viverra erat mi ac ligula. Phasellus faucibus dignissim dui quis cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eu lacus non nisl aliquam consectetur non nec leo. Nulla facilisi. Aliquam hendrerit vestibulum turpis, a ultricies neque semper sed. Vestibulum vitae condimentum felis, a mollis lorem. Integer in massa eu lorem accumsan sagittis. Suspendisse tempor ipsum ut ante bibendum, sit amet vestibulum nibh egestas. Ut ullamcorper magna id sodales laoreet. Maecenas egestas libero consectetur malesuada vehicula. Morbi sodales sapien a enim semper vehicula. Cras tempor nulla vel mauris tempor consectetur. Phasellus auctor tincidunt orci, et porttitor nunc feugiat id.

Proin leo quam, efficitur id ultricies vitae, condimentum eget purus. Vestibulum gravida elit at nunc rhoncus, sit amet ultrices dui mollis. Maecenas finibus, ante vel tristique dapibus, est sem sagittis mauris, in congue urna nibh sed nibh. Pellentesque dictum ligula dolor. Donec condimentum tempus cursus. In eu finibus magna, nec dictum nisi. In at sodales turpis, et porta sapien. Vivamus eu dolor tristique, mollis purus at, sollicitudin mi. Fusce felis ipsum, volutpat a pharetra id, rhoncus sed risus. Aenean commodo facilisis eros eu eleifend. Nam ullamcorper sem eget iaculis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nulla tincidunt diam erat, ut convallis velit maximus a. Phasellus posuere nulla metus, at laoreet risus auctor eget. Maecenas ut ante est. Vivamus convallis neque id fermentum mollis. Mauris elementum ac nulla aliquam ullamcorper. Aenean ultrices, purus at tristique tincidunt, dui nibh vehicula magna, sed hendrerit massa lacus mattis turpis. Mauris convallis eget velit vitae tristique. Quisque non lacus est.

Nullam non consequat quam, et porttitor urna. Phasellus aliquet turpis libero, sed malesuada magna fermentum quis. Pellentesque fermentum enim vitae elit euismod, sit amet bibendum lacus dignissim. Phasellus felis neque, commodo non erat nec, sollicitudin blandit dui. Ut sollicitudin ipsum in pellentesque maximus. Aliquam rutrum orci at elit dignissim tincidunt. Vivamus gravida aliquet justo at tempus. Aliquam dictum risus ut rhoncus dictum. Phasellus pulvinar vestibulum vestibulum. Praesent suscipit erat ut suscipit consectetur. Nullam sed sodales sapien. In hac habitasse platea dictumst.

Aliquam ac risus ut ex venenatis lacinia sit amet ut massa. In eget nibh mi. In pharetra lectus vitae semper aliquet. Duis molestie leo nec nunc sagittis, id rhoncus erat accumsan. Sed bibendum volutpat nibh, quis pretium arcu dapibus id. Morbi feugiat dapibus purus, at condimentum neque porttitor vestibulum. Cras commodo enim sed turpis aliquet, at varius dui malesuada. Praesent laoreet nisi at porta tincidunt. Nulla molestie vulputate sapien, in malesuada risus tempus eget. In condimentum libero nec tristique sagittis. Suspendisse pharetra hendrerit mi, vel pretium ex pharetra nec. Morbi tempor eget augue a congue. Sed commodo tellus in nisi lacinia, quis scelerisque felis rhoncus. In eget massa nec arcu vulputate eleifend. Praesent iaculis suscipit elit at fermentum. In rhoncus, nibh quis dignissim dignissim, dolor ipsum interdum erat, id maximus purus risus id libero.

Vestibulum hendrerit, tortor ut commodo tempus, lacus urna ultricies sem, sed varius felis odio ut augue. Proin sit amet venenatis augue. Mauris pretium lorem a diam commodo, et rhoncus ipsum condimentum. Donec id imperdiet risus. Donec sit amet est posuere, varius massa id, efficitur massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet euismod felis.

Ut nisl dolor, vehicula sit amet nunc sed, vulputate facilisis quam. Nulla metus libero, dapibus ut nisi quis, varius venenatis ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rhoncus nisi a rhoncus posuere. Phasellus porta aliquam nisl a fringilla. In sodales pulvinar quam sit amet congue. Fusce elementum, nulla at tempus ultricies, nisi ante sodales libero, eu commodo lorem leo ut nisl. Vivamus eleifend rhoncus egestas. Fusce ipsum lacus, faucibus vehicula fermentum vel, aliquam eget mauris. Integer et ex arcu.

Nullam id felis venenatis erat accumsan sollicitudin id a urna. Vestibulum commodo massa a odio condimentum auctor. Donec iaculis nisi iaculis, iaculis lacus hendrerit, facilisis ante. Curabitur hendrerit congue justo ac tincidunt. Suspendisse vitae risus dictum lacus laoreet commodo nec sed magna. Praesent massa ante, blandit vel sapien tincidunt, pharetra dictum risus. Morbi pulvinar vitae turpis eget euismod. Nullam pellentesque, nibh aliquet ultricies cursus, nunc ipsum tincidunt velit, ultrices tristique lectus velit quis ante. Quisque sollicitudin, dui ut sagittis dictum, nunc magna viverra justo, a posuere velit eros in nibh. Pellentesque in nunc leo. Mauris pharetra risus odio, quis hendrerit lacus commodo vitae. Sed efficitur hendrerit orci, nec rhoncus risus euismod et. Fusce id venenatis dolor. Phasellus eu urna nibh. Donec lacus eros, maximus id nunc eu, porttitor porta ligula. Mauris at sapien nec tellus commodo feugiat.

Nam non vestibulum neque, quis facilisis odio. Aliquam erat volutpat. Nunc pretium porta scelerisque. Fusce gravida, lectus vel egestas maximus, leo elit accumsan mauris, at molestie mi nibh et nisl. Aenean ultricies, mi non sodales ornare, ligula nulla tincidunt justo, in congue metus felis quis ipsum. Quisque sed urna finibus, consequat felis nec, semper turpis. Sed ac libero velit. Phasellus efficitur dolor quis arcu faucibus, id eleifend tortor aliquam. Quisque eu sollicitudin nisl. Fusce lacinia, turpis non laoreet efficitur, nisl eros congue leo, eu bibendum tellus est a urna. Nunc iaculis ultrices rhoncus. Proin euismod tellus et quam facilisis, a placerat dui dignissim. Nunc ultricies tincidunt dui a condimentum. Duis et metus bibendum, efficitur odio eget, placerat urna.

Aliquam risus tortor, ullamcorper sit amet imperdiet id, ultricies vitae est. Sed sagittis tortor nec ligula fermentum dapibus. Cras quis purus massa. Pellentesque vel accumsan eros. Fusce nec commodo ante, eu convallis dui. Sed ullamcorper nunc at ligula fermentum, in tincidunt nisi sodales. Aenean luctus tortor at odio fringilla maximus. Sed semper, ipsum vel dictum vestibulum, mi quam semper augue, ultrices accumsan elit metus sed risus. Donec libero libero, aliquet nec ex ut, gravida dapibus diam. Proin condimentum molestie nibh, ut egestas lorem egestas vel. Ut sed blandit arcu, eget accumsan elit.

Nulla maximus odio maximus magna blandit vehicula. Etiam tempus velit eget ultrices egestas. Phasellus fringilla, massa hendrerit varius viverra, velit lectus suscipit nisl, sit amet bibendum sem dui eget lorem. Ut nisl purus, facilisis ac libero ut, ornare sodales leo. Mauris in auctor eros. Integer ut ante sed ante vulputate pretium. Curabitur condimentum maximus lacus, vel vestibulum nisi sodales id. Praesent vehicula non ligula et porttitor. Phasellus aliquet quam nec interdum laoreet. Maecenas sed cursus elit, eget placerat eros. Cras placerat odio sit amet velit semper viverra. Nulla in lacus vel ligula ullamcorper semper sollicitudin in odio. Mauris sodales faucibus facilisis. Aenean consequat lobortis interdum.
      </div>
    </div>
  )
}

export default About
