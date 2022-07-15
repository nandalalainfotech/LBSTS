
import express from 'express';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/sirius-matrimony-frontend'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/sirius-matrimony-frontend/'});
});

app.listen(process.env.PORT || 8081);