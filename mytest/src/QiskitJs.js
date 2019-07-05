import qiskit from 'qiskit';

export function Qiskit(val) {
    qiskit.algo.random().then(val => console.log(`JavaScript: ${val}`));
    return val
}