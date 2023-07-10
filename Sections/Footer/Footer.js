
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Link, Accordion , Container } from '@mui/material';
import Image from 'next/image'
import kmrLogo from '/public/icons/kalvimalar-english-logo.png';
import { Facebook, Twitter, YouTube, Telegram, Instagram, Pinterest, Google } from '@mui/icons-material/';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#111212' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        
        <footer class="edu-footer footer-dark bg-image footer-style-2">
            <div class="footer-top footer-top-2">
            <Container maxWidth={false}>  

           
                    <Grid container fixed spacing={2}>
                        <Grid item xs={12} md={4} lg={4}>
                            <Item><div class="edu-footer-widget">
                                <div class="logo">
                                    <a href="index.html">
                                        <Image className='mlogo'
                                            src={kmrLogo}
                                            alt="Picture of the author"
                                            width={250}
                                            height={39}
                                        />
                                    </a>
                                </div>
                                <p class="description">Dinamalar</p>
                                <p class="description">219, Anna Salai</p>
                                <p class="description">Chennai - 600 002</p>
                                <p class="description">Tamilnadu, India.</p>

                                <div class="widget-information">
                                    <ul class="information-list">
                                        <li><span>Fax:</span>+91-44-28592815</li>
                                        <li><span>Phone:</span><a>+91-44-28542700, 28592814</a></li>
                                        <li><span>Email:</span><a href="mailto:kalvimalar@dinamalar.in" target="_blank">kalvimalar@dinamalar.in</a></li>
                                    </ul>
                                </div>
                            </div></Item>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} display={{ xs: "none", lg: "block" }}>
                            <Item><div class="edu-footer-widget explore-widget">
                                <h4 class="widget-title">Links</h4>
                                <div class="inner">
                                    <ul class="footer-link link-hover">
                                        <li><Link href="#">B.Tech</Link ></li>
                                        <li><Link href="#">MBA</Link ></li>
                                        <li><Link href="#">MBBS</Link ></li>
                                        <li><Link href="#">Design</Link ></li>
                                        <li><Link href="#">Law</Link ></li>
                                        <li><Link href="#">Science</Link ></li>
                                        <li><Link href="#">Study Abroad</Link ></li>
                                        <li><Link href="#">All Courses</Link ></li>
                                    </ul>
                                </div>
                            </div></Item>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4} display={{ xs: "none", lg: "block" }}>
                            <Item><div class="edu-footer-widget">
                                <h4 class="widget-title">Contacts</h4>
                                <div class="inner">
                                    <p class="description">Enter your email address to register to our newsletter subscription</p>
                                    <div class="input-group footer-subscription-form">
                                        <input type="email" class="form-control" placeholder="Your email" />
                                        <button class="edu-btn btn-medium" type="button">Subscribe <i class="icon-4"></i></button>
                                    </div>
                                    <ul class="social-share icon-transparent">
                                        <li><Link a href="#" class="color-fb"><Facebook /></Link ></li>
                                        <li><Link href="#" class="color-linkd">< Twitter /></Link ></li>
                                        <li><Link href="#" class="color-ig"><YouTube /></Link ></li>
                                        <li><Link href="#" class="color-twitter"><Telegram /></Link ></li>
                                        <li><Link href="#" class="color-yt"><Instagram /></Link ></li>
                                        <li><Link href="#" class="color-yt"><Pinterest /></Link ></li>
                                        <li><Link href="#" class="color-yt"><Google /></Link ></li>

                                    </ul>
                                </div>
                            </div></Item>
                        </Grid>

                        <Grid item xs={12}><div class="copyright-area">
                            <div align="center">
                                            <p>Copyright © 2023 <Link href="#" target="_blank">www.kalvimalar.com</Link > All rights reserved <Link href="#" target="_blank">Contact us</Link ></p>
                                        
                            </div>
                        </div></Grid>
                    </Grid>
                    </Container>
                </div>
               
              
            </footer>
          
    )
}

export default Footer

