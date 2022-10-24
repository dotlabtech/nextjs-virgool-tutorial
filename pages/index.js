import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.about__profile}>
          <Image src='/icons/profile.jpg' width={64} height={64} />
        </div>
        <h3 className={styles.about__name}>ابراهیم</h3>
        <p className={styles.about__bio}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
          تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود
          در ارائه راهکارها و شرایط سخت تایپ به پایان رسدوزمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
    </Layout>
  )
}

export default HomePage