# PHP, phpMyAdmin, MongoDB aur recent PHP cyberattack — Roman Urdu mein complete guide

Tum Computer Science ke student ho, is liye main is topic ko bilkul basic level se samjhaunga. Pehle web development ke concepts clear karenge, phir October 2026 ke recent PHP security incident ki history, hackers ne kya discover kiya, vulnerability kaam kaise karti hai, aur uska solution kya hai.

Sab se important baat: 21 October 2026 ko PHP team ne do critical security vulnerabilities ke fixes release kiye. In vulnerabilities se kuch conditions mein attacker bina login kiye vulnerable server par apna code execute kar sakta tha. Inhein commonly PHP2Shell kaha ja raha hai. 23 October ko ek additional vulnerability bhi disclose hui, jiske liye alag mitigation zaroori hai.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://www.php.net\&sz=32)

PHP+2



# Part 1 — PHP kya hai?

[PHP Logo PNG Vector (SVG) Free Download](https://images.openai.com/static-rsc-4/OpgKuyJwjfEOwfqNQ8RHM5QUrk-PDk3ybQ2BPXsyyx8b0E2F2JX7NzVMBAabTmBiPa283vw_tcrzd6Jg6HMzGxU-JQL94CeX-2vXDW8mR1fwX7-AmAmiIWZciyvo18dJjxDHm0ArrbengvWmCFWWaiMO2OT1zk9c_c47t_1Sjo4?purpose=inline)

[Introduction to Website Architecture and Major Components | by Rangga Wijaya | Medium](https://images.openai.com/static-rsc-4/wCQW5UbGKlaKONlXn07jG7jXr25b133PI9RwcgXAMuBpkEGXRKKE2rHBUxCK5kLpd0IGQUSlzPSNc-WtDm-0xe0LsvqtIQq5ReFKyTnUhD3laNLXc1vzf7fLAaAr4jkWhvydgzriYPA1Xw2bLSHSaHX3t_pP8cZYs0nYdQCEBqU?purpose=inline)

[Client Side vs. Server Side in Web Development: A Beginner's Guide](https://images.openai.com/static-rsc-4/mQjaRUqaVDyQBq_OVDch7eRrzCjG5BrNR0cXxw9rRJpqm1lyLr0YhJc9nMq1pShd0kFRyqOPYuxnY27Zk2mHb0asCgXy1weV1AAS8Yn57L5Uv3z5deai2h0xRFi5k-ujxskCyrn1hP8i5bL5tiR0nqKPtfSG8dpckbZ3vAmmKKM?purpose=inline)

PHP ek server-side programming language hai jo websites ke backend mein use hoti hai.

PHP ka naam originally Personal Home Page se aaya tha; ab iska official recursive naam PHP: Hypertext Preprocessor hai.

Misal ke taur par, tum ek university portal bana rahe ho jahan student login karta hai, attendance check karta hai aur assignments dekhta hai.

Is system mein:

- HTML page ka structure banata hai.
- CSS page ko design karta hai.
- JavaScript browser mein interactions handle karta hai.
- PHP server par login verify kar sakta hai aur database se attendance nikal sakta hai.
- Database students, attendance aur courses ka data save karta hai.

## PHP kaam kaise karti hai?

1\. Browser

Student login request bhejta hai

2\. Web server + PHP

Credentials check aur backend logic execute hota hai

3\. Database

User record aur attendance retrieve hoti hai

4\. Browser ko response

Student ka dashboard display hota hai

Ye simplified example hai. Real applications mein web server, PHP runtime aur database ki configuration mukhtalif ho sakti hai.

PHP server par execute hoti hai; aam tor par browser ko PHP ka source code nahi milta, balkay us se generate hua HTML ya doosra response milta hai.

### PHP ka chhota sa example

```
<?php
$name = "Saad";
echo "Welcome, " . $name;
?>
```

Output:

```
Welcome, Saad
```

Yahan:

- `$name` variable hai.
- `"Saad"` us variable ki value hai.
- `echo` output generate karta hai.
- `<?php ... ?>` PHP code ko mark karta hai.

Official documentation: [PHP Manual — Introduction](https://www.php.net/manual/en/introduction.php?utm_source=chatgpt.com)

## PHP kahan use hoti hai?

- WordPress websites aur content management systems.
- E-commerce websites.
- Login, registration aur admin dashboards.
- APIs aur backend services.
- Existing enterprise aur government web applications.

PHP ka matlab ye nahi ke website purani ya insecure hai. Security ka depend language ke saath uske version, code, configuration aur maintenance par bhi hota hai.

