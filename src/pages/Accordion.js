import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState(null);
  const accordionRefs = [React.useRef(), React.useRef(), React.useRef()]; // Add more refs for additional accordions

  React.useEffect(() => {
    const handleIntersection = (entries, index) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setExpanded(`panel${index}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observers = accordionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => handleIntersection(entries, index + 1),
        observerOptions
      );
      observer.observe(ref.current);
      return observer;
    });

    // Cleanup the observers on component unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [accordionRefs]);

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={() => {}} ref={accordionRefs[0]}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails sx={{ height: '400px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={() => {}} ref={accordionRefs[1]}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails sx={{ height: '400px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={() => {}} ref={accordionRefs[2]}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion 3
        </AccordionSummary>
        <AccordionDetails sx={{ height: '400px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse doloremque beatae unde magni quis, veniam ipsam! Eveniet dolor veritatis ab, nemo maiores voluptatibus dignissimos aspernatur inventore dolorem id amet possimus quas perferendis doloribus quaerat quod autem nam tempora asperiores facilis consectetur nihil animi vitae nulla. Autem natus mollitia doloremque. Nihil possimus repudiandae aliquid quis dicta cupiditate ut maxime alias recusandae pariatur. Debitis dolores ab magni suscipit ipsum odio libero molestias non at, accusantium officiis, a dolorum inventore ad. Fuga placeat, voluptates aut excepturi doloremque error dolor vero a. Mollitia laboriosam harum dignissimos hic deserunt sunt in modi possimus quisquam, totam natus molestiae impedit unde, veritatis facere reiciendis autem assumenda ipsa aliquam eveniet consectetur alias, magni minima dolore. Distinctio unde amet voluptas sapiente ut nisi aperiam ab deleniti, quia quae beatae numquam, nesciunt sint, cumque atque placeat voluptatibus? Labore, suscipit dolores sequi quidem minima cumque qui animi, veniam libero nisi atque optio ea rem hic magni, doloribus eveniet sunt. Quibusdam asperiores, architecto quae molestias facere dolorum labore cupiditate a cum nostrum consequatur pariatur? Ducimus ratione dolores qui saepe sint, eligendi mollitia soluta magni error quos omnis placeat voluptate libero ut repellat voluptates. Ipsam molestias excepturi distinctio quisquam sint tempore! Inventore pariatur nostrum veritatis, illo modi voluptas obcaecati doloribus at velit distinctio laborum, quia reprehenderit dignissimos dicta. Assumenda, odit sapiente molestias minus in iste obcaecati officia doloribus quibusdam quae ex? Facilis voluptatum veniam ipsa amet ea? Rerum, eligendi perferendis architecto officiis odit labore doloribus in maxime, dolore maiores impedit est similique exercitationem quos. Quod impedit excepturi sed id laborum culpa sapiente quisquam provident sint vel ipsum consectetur, molestiae laudantium neque debitis nemo ipsa veniam eligendi, non officia. Corporis asperiores ad culpa sint, illo at ipsam, fugiat eaque beatae voluptatem, quam amet. Porro iusto cum incidunt molestiae expedita, accusamus aliquid quaerat, iure laudantium eaque, maxime nobis minus possimus nihil ab accusantium dolores in aperiam sed vitae voluptates. Amet velit eveniet corporis nihil accusamus. Quos fuga alias autem. Consequuntur, vitae non aspernatur deleniti temporibus iste necessitatibus suscipit. Accusantium vel ut velit delectus nesciunt repellat quam, veniam alias eos, vitae assumenda officiis enim dolor nobis illo cumque doloremque reprehenderit numquam suscipit veritatis. Facilis nam aliquam mollitia distinctio? Enim laudantium ab illo quae suscipit quibusdam nihil quidem, neque accusantium quo, odit aliquid. Commodi eveniet sequi animi esse distinctio recusandae ipsam vitae voluptatum harum maxime ratione voluptates fugit numquam amet quos, saepe excepturi unde perferendis minus nostrum maiores sapiente nobis dolore placeat? In, veritatis, architecto assumenda quos aperiam corporis, eum excepturi alias soluta a officia labore. Fuga quam repellendus quas maxime non! Quam dicta possimus rem, inventore ab fuga. Optio blanditiis perspiciatis veniam nostrum autem provident perferendis ea. Voluptate, illum numquam nulla, ut nesciunt facilis dolore magnam ex qui at dicta iure sapiente earum sint nemo. Ullam, dolores hic. Unde eius harum dolor nobis impedit! Soluta repellat quia assumenda dignissimos distinctio voluptas quaerat, fugit, animi, nulla expedita facilis! Consequatur, est. Qui consequatur error numquam labore ex ratione harum? Sed est animi excepturi? Natus, nam fuga? Ratione, quos hic, reiciendis unde dolor accusamus ab asperiores veniam cumque nemo officiis voluptatibus dolore alias, quaerat assumenda perferendis dolorum quia pariatur ipsa vel cupiditate laudantium. Temporibus reprehenderit provident eligendi saepe et ut perferendis natus at! Vel ad dolore officia ipsum eius ratione ab? Ipsam velit exercitationem facilis quo, iste voluptatum iusto rem ducimus facere corrupti dicta animi earum! Ad rerum provident soluta quisquam accusantium at, molestias eligendi? Molestiae odio odit molestias provident repudiandae ut alias iure eius vitae rerum unde excepturi officiis quo optio earum quidem magni consequatur maxime non omnis, dolorem quasi! Nostrum in, vitae rem fugit repellat hic? Pariatur rem consequuntur eius numquam. Maxime dolore sequi labore possimus placeat voluptates aliquid quasi enim tempora nulla repudiandae voluptatum quod, dignissimos, harum illum alias sed, esse iusto quaerat. Consequatur quod, expedita nostrum quas delectus architecto! Sapiente odio nam optio tempora praesentium aspernatur ducimus neque, sint alias fugit vitae consequuntur, reprehenderit molestiae animi pariatur! Corporis enim nulla doloribus earum excepturi, aspernatur beatae, soluta eligendi animi inventore repudiandae, qui odit accusamus facere! Temporibus sed alias magni impedit aliquid ipsum consequuntur sapiente assumenda nulla? Accusamus eveniet dolorem veritatis harum fugiat temporibus laboriosam sunt dolores, nesciunt possimus eum fugit perferendis, repellat, blanditiis placeat error! Asperiores perferendis dolores enim quod quasi mollitia doloribus, consectetur sit voluptatem debitis earum obcaecati pariatur eveniet molestias dicta illo sint quibusdam sed tempore distinctio deserunt, minima reprehenderit? Minima nisi sit nobis voluptates in vitae doloribus sequi vel facere ipsa voluptatibus quidem nam, adipisci facilis veritatis corrupti odio dolorem eos minus laborum iusto eaque! Maiores modi, exercitationem, facilis aut minima blanditiis quisquam qui, laborum odit unde deleniti enim molestias voluptatem. Voluptas pariatur id at eligendi, error repellat illum amet dignissimos ipsum impedit facere, similique nam. Repellat delectus error cum possimus, necessitatibus sed voluptatum culpa, mollitia incidunt doloribus voluptas eos ipsum. Unde aspernatur, tempora, ipsa quae sint labore cupiditate sit corporis sed odio perferendis neque repellendus magnam optio? Repellendus soluta sint incidunt! Ducimus voluptatibus autem quia incidunt recusandae nihil, iusto laudantium hic ipsum, inventore soluta obcaecati, ut vero temporibus tenetur sunt esse aspernatur. Id nisi repudiandae exercitationem consectetur in quia rerum iure placeat, tempora, veniam voluptatem odit ullam. Ab culpa sunt, officia fuga dolor nobis reiciendis corporis deserunt quo eum optio delectus nihil facere aspernatur debitis vero, accusantium, eius repellendus voluptatem aut sapiente? Culpa suscipit possimus porro dolores magni accusamus nisi in beatae. Ut commodi temporibus distinctio rerum ipsam debitis vel neque.</h1>
    </div>
  );
}
